# 其他示例

## 发送接口请求

```js
pm.sendRequest('https://www.api.com/get', function (err, response) {
  console.log(response.json());
});
```

更多`pm.sendRequest`用法说明，请查看文档：[pm.sendRequest](../../api-references/pm-reference/#pm-sendrequest)

## 加密/解密

详情请看 [加密接口示例](https://www.apifox.cn/web/project/1094012/apis/api-26734174-run)

关于加密 / 解密的高级技巧请看 [带你玩转接口管理工具加解密](../../../../articles/incode-decode/)

### Decode base64 数据

```js
var cryptoJs = require('crypto-js');

// 假设 `base64Content` 是一个已经用 base64 encoded 过的值
var rawContent = base64Content.slice(
  'data:application/octet-stream;base64,'.length
);

// CryptoJS 是一个已经内嵌到脚本引擎的对象，可以直接使用，使用文档: https://www.npmjs.com/package/crypto-js
var intermediate = cryptoJs.enc.Base64.parse(base64content);
pm.test('Contents are valid', function () {
  pm.expect(cryptoJs.enc.Utf8.stringify(intermediate)).to.be.true; // a check for non-emptiness
});
```

使用 [内置的 JS 库](../../api-references/library-reference/) 基本可以实现各种加密、解密算法。

### 转化 XML 为 JSON 对象

```js
var jsonObject = xml2Json(responseBody);
```
