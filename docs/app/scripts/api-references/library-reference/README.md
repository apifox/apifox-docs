# 使用 JS 类库

1. 内置的 JS 类库

   通过 `require`方法可以直接使用 Apifox 内置的 JS 类库。

   ```js
   var cryptoJs = require("crypto-js");
   console.log(cryptoJs.SHA256("Message"));
   ```

2. 非内置的 JS 类库

   通过`fox.liveRequire`方法可以动态引入未内置的但是在 npm 上已发布的其他各种库（仅支持纯 js 库，最好是写明了支持浏览器端运行的 browser 字样的库，含 C/C++等语言扩展之类的库是不支持加载的，会运行超时或异常）。

   注意：

   1. 仅 Apifox 版本号 >= 1.4.5 才支持，老版本不支持，请升级到最新版。
   2. 非内置库需要动态从网络下载 JS 类库，所以必须要联网，且性能有有所损耗，建议优先使用内置的 JS 库。

   ```js
   // 使用非内置的 JS 类库示例

   // 引入单个 npm 库：md5
   fox.liveRequire("md5", (md5) => {
     try {
       console.log(md5("message")); // => '04a410d39d39f9831217edd702d7fde0'
     } catch (error) {
       console.error("An error occurred during liveRequire callback", error);
       throw error;
     }
   });

   // 引入多个 npm 库：camelize，md5
   fox.liveRequire(["camelize", "md5"], ([camelize, md5]) => {
     try {
       console.log("loaded module  is ", camelize, md5);

       console.log('camelize("foo-bar") is ', camelize("foo-bar")); // => 'fooBar'
       console.log('md5("message") is ', md5("message")); // => '04a410d39d39f9831217edd702d7fde0'
     } catch (error) {
       console.error("An error occurred during liveRequire callback", error);
       throw error;
     }
   });

   // 引入多个 npm 库（带版本）：camelcase，md5
   fox.liveRequire(
     [
       {
         name: "camelcase",
         version: "6.2.1",
       },
       "md5",
     ],
     ([camelCase, md5]) => {
       try {
         console.log("loaded module  is ", camelCase, md5);

         console.log('camelCase("foo-bar") is ', camelCase("foo-bar")); // => 'fooBar'
         console.log('md5("message") is ', md5("message")); // => '04a410d39d39f9831217edd702d7fde0'
       } catch (error) {
         console.error("An error occurred during liveRequire callback", error);
         throw error;
       }
     }
   );
   ```

### 内置类库列表

- Encode、Decode 库
  - [atob](https://www.npmjs.com/package/atob)（v2.1.2）：Base64 解码
  - [btoa](https://www.npmjs.com/package/btoa)（v1.2.1）：Base64 编码
  - [crypto-js](https://www.npmjs.com/package/crypto-js)（v3.1.9-1）：编码 / 解码库，常用的编码解码方式基本都有，如 Base64、MD5、SHA、HMAC、AES 等等。
    - 注意：只能 require 整个模块，不能单独 require 类库里的某个子模块，具体看本文档末尾说明。
  - [jsrsasign](https://www.npmjs.com/package/jsrsasign)（10.3.0）：RSA 加密 / 解密 （Apifox 版本号 >= 1.4.5 才支持，老版本不支持）
- 断言
  - [chai](http://chaijs.com/) （v4.2.0）：BDD / TDD 断言库
- 实用工具
  - [postman-collection](http://www.postmanlabs.com/postman-collection/)（ v3.4.0）：Postman Collection 库
  - [cheerio](https://cheerio.js.org/)（v0.22.0）：jQuery 的一个子集
  - [lodash](https://lodash.com/) （v4.17.11）：JS 实用工具库
  - [moment](http://momentjs.com/docs/)（v2.22.2）：日期处理库 (不含 locales)
  - [uuid](https://www.npmjs.com/package/uuid) ：生成 UUID
  - [xml2js](https://www.npmjs.com/package/xml2js)（v0.4.19）：XML 转 JSON
  - [csv-parse/lib/sync](https://csv.js.org/parse/api/sync/)（ v1.2.4）：CSV 格式数据处理
- JSONSchema 校验库
  - [tv4](https://github.com/geraintluff/tv4)（v1.3.0）：JSONSchema 校验库
  - [ajv](https://www.npmjs.com/package/ajv)（v6.6.2）：JSONSchema 校验库
- 内置 NodeJS 模块
  - [path](https://nodejs.org/api/path.html)
  - [assert](https://nodejs.org/api/assert.html)
  - [buffer](https://nodejs.org/api/buffer.html)
  - [util](https://nodejs.org/api/util.html)
  - [url](https://nodejs.org/api/url.html)
  - [punycode](https://nodejs.org/api/punycode.html)
  - [querystring](https://nodejs.org/api/querystring.html)
  - [string-decoder](https://nodejs.org/api/string_decoder.html)
  - [stream](https://nodejs.org/api/stream.html)
  - [timers](https://nodejs.org/api/timers.html)
  - [events](https://nodejs.org/api/events.html)

### 使用方式

`require` 对应模块，赋值给一个变量即可使用。

```js
// SHA256
var cryptoJs = require("crypto-js");
console.log(cryptoJs.SHA256("Message"));

// base64
var atob = require("atob");
console.log(atob("Message"));

// 引用内置 JSONPath 库提取响应
var { JSONPath } = require('jsonpath-plus');
var result = JSONPath({path: '$.data', json: { data: 123 }});
console.log(result);
```

:::tip 注意

使用内置类库时，只能 require 整个模块，不能单独 require 类库里的某个子模块

```js
// 正确示例：
var cryptoJs = require("crypto-js");
console.log(cryptoJs.SHA256("Message"));

// 错误示例
var SHA256 = require("crypto-js/sha256");
console.log(SHA256("Message"));
```

::
