# 接口签名如何处理

## 期望效果

1. 统一处理，无需每个接口单独处理。

## 实现思路

1. 创建一个 [公共脚本](../../scripts/common-script/) 实现签名逻辑，[读取接口请求参数](../../scripts/examples/request-handle/)，然后使用 [内置类库](../../scripts/api-references/library-reference/)，如（[crypto-js](https://www.npmjs.com/package/crypto-js)），生成签名。
2. 将生成的签名 sign 作为参数加入请求，可使用以下两种方案：
   - 方案一：[脚本直接修改请求信息](../../scripts/examples/request-handle/)，注入一个签名参数，无需使用环境变量。
   - 方案二：将生成的签名写入环境变量，接口设置参数时引用环境变量。
3. 在接口的 [前置脚本](../../scripts/pre-request-scripts/) 里引用前面创建公共脚本。
4. 如果签名算法是其他语言编写的，可使用`fox.execute`方法 [调用其他语言编写的程序](../../scripts/api-references/external-programs/)



## 接口签名示例

### 签名生成规则

本签名规则同 [微信支付签名算法](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3)。

**第一步**：假设所有发送参数`集合M`，将`集合M`内非空参数值的参数按照参数名 ASCII 码从小到大排序（字典序），使用 URL 键值对的格式（即key1=value1&key2=value2…）拼接成字符串`stringA`。

特别注意以下重要规则：

1. 参数名ASCII码从小到大排序（字典序）；
2. 如果参数的值为空不参与签名；
3. 参数名区分大小写；
4. 传送的`sign`参数不参与签名；

**第二步**：在`stringA`最后拼接上`key`得到`stringSignTemp`字符串，并对`stringSignTemp`进行MD5运算，再将得到的字符串所有字符转换为大写，得到`sign`值`signValue`。



### 公共脚本实现

```js
// 获取预先设置为环境变量的 APPKEY
let key = pm.environment.get("APPKEY");

// 存放所有需要用来签名的参数
let param = {};

// 加入 query 参数
let queryParams = pm.request.url.query;
queryParams.each(item => {
    if (!item.disabled && item.value !== '') { // 启用且非空参数值的参数才参与签名
        param[item.key] = item.value;
    }
});

// 加入 body 参数
if (pm.request.body) {
    let formData;
    switch (pm.request.body.mode) {
        case 'formdata':
            formData = pm.request.body.formdata;
            break;
        case 'urlencoded':
            formData = pm.request.body.urlencoded;
            break;
        case 'raw':
            // 如果没有 JSON 格式的请求 body，或 JSON 格式 body 不参与签名，可以删除这一段
            let contentType = pm.request.headers.get('content-type');
            if (
                contentType
                && pm.request.body.raw
                && contentType.toLowerCase().indexOf('application/json') !== -1
            ) {
                try {
                    let jsonData = JSON.parse(pm.request.body.raw);
                  	/*
                  	* 注意：通过脚本取出来的接口参数，如果参数包含变量，变量是不会替换成对应的值。如想要获取替换后的值，可使用`pm.variables.replaceIn`方法处理：
                    * let body = pm.variables.replaceIn(pm.request.body.raw);
                    * let jsonData = JSON.parse(body);
                  	*/
                    for (let key in jsonData) {
                        let value = `${jsonData[key]}`; // 此处要注意如果值的实际类型不是 string 需要根据实际情况处理。
                        if (value !== '') { // 非空参数值的参数才参与签名
                            param[key] = value;
                        }
                    }
                } catch (e) {
                    console.log('请求 body 不是 JSON 格式')
                }
            }
            break;
        default:
            break;
    }
    if (formData) {
        formData.each(item => {
            if (!item.disabled && item.value !== '') { // 启用且非空参数值的参数才参与签名
                param[item.key] = item.value;
            }
        });
    }
}


// 取 key
let keys = [];
for (let key in param) {
    // 注意这里，要剔除掉 sign 参数本身
    if (key !== 'sign') {
        keys.push(key);
    }
}

// 参数名 ASCII 码从小到大排序（字典序）
keys.sort();

// 转成键值对
let paramPair = [];
for (let i = 0, len = keys.length; i < len; i++) {
    let k = keys[i];
    paramPair.push(k + '=' + encodeURIComponent(param[k])) // urlencode 编码
}

// 最后加上 key
paramPair.push("key=" + key);

// 拼接
let stringSignTemp = paramPair.join('&');
// console.log(stringSignTemp);

let sign = CryptoJS.MD5(stringSignTemp).toString().toUpperCase();
// console.log(sign);

// 方案一：直接修改接口请求的 query 参数，注入 sign，无需使用环境变量。
// 参考文档：https://www.apifox.cn/help/app/scripts/examples/request-handle/
queryParams.upsert({
    key: 'sign',
    value: sign,
});

// 方案二：写入环境变量，此方案需要在接口里设置参数引用环境变量
// pm.environment.set("SIGN", sign);
```



## 百度翻译接口签名示例

本示例为调用百度翻译接口，[百度翻译接口参考文档](https://fanyi-api.baidu.com/product/113)。



### 签名生成规则

**第一步**：将请求参数中的 APPID(appid)， 翻译query(q, 注意为UTF-8编码), 随机数(salt), 以及平台分配的密钥(可在[管理控制台](http://api.fanyi.baidu.com/api/trans/product/desktop?req=developer)查看) 按照 appid+q+salt+密钥 的顺序拼接得到`字符串1`。
**第二步**：对`字符串1`做md5，得到32位小写的sign。

注：

1. 待翻译文本（q）需为UTF-8编码
2. 在生成签名拼接 appid+q+salt+密钥 字符串时，q不需要做URL encode，在生成签名之后，发送HTTP请求之前才需要对要发送的待翻译文本字段q做URL encode

```js
官方举例：将apple从英文翻译成中文：
请求参数：
q=apple
from=en
to=zh
appid=2015063000000001
salt=1435660288
平台分配的密钥: 12345678
生成sign：
>拼接字符串1
拼接appid=2015063000000001+q=apple+salt=1435660288+密钥=12345678
得到字符串1 =2015063000000001apple143566028812345678
>计算签名sign（对字符串1做md5加密，注意计算md5之前，串1必须为UTF-8编码）
sign=md5(2015063000000001apple143566028812345678)
sign=f89f9594663708c1605f3d736d01d2d4
完整请求为：
http://api.fanyi.baidu.com/api/trans/vip/translate?q=apple&from=en&to=zh&appid=2015063000000001&salt=1435660288&sign=f89f9594663708c1605f3d736d01d2d4
```



### 公共脚本实现

```js
// 获取 Query 参数对象
var queryParams = pm.request.url.query;

// 获取 query 参数 q 的值
var q = queryParams.get('q');

// 获取预先设置为环境变量的 APPID 和 SECRET_KEY
var appid = pm.environment.get("APPID");
var secretKey = pm.environment.get("SECRET_KEY");

// 定义一个随机数（32768, 65536）之间
var salt = parseInt(Math.random() * (32769) + 32768, 10);

// 将随机数转换为字符串
salt = salt.toString();
console.log(salt);

// 定义一个由appid、要翻译的字符串、随机数、密钥组合成一个字符串
var str = appid + q + salt + secretKey;
console.log(str);

// 将 str 进行 md5 加密生成 sign
var sign = CryptoJS.MD5(str).toString();

// 方案一：直接修改接口请求的 query 参数，注入 salt 和 sign，无需使用环境变量。
// 参考文档：https://www.apifox.cn/help/app/scripts/examples/request-handle/
queryParams.upsert({
    key: 'salt',
    value: salt,
});
queryParams.upsert({
    key: 'sign',
    value: sign,
});

```