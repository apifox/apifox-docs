# pm 对象 API

## 全局方法

::: v-pre

### pm

```
pm:Object
```

`pm`对象包含了接口（或测试集）运行的相关信息，并且可以通过它访问需要发送的请求信息和发送后返回的结果信息。另外还可以通过它`get`或`set`环境变量和全局变量。

```
pm.info:Object
```

`pm.info` 对象包含了接口（或测试集）运行的相关信息。

- `pm.info.eventName:String`

  当前执行是什么类型的脚本：前置脚本（prerequest），或后置脚本（test）。

- `pm.info.iteration:Number`

  当前执行第几轮循环（iteration），仅集合测试有效。

- `pm.info.iterationCount:Number`

  本次执行需要循环的总轮数，仅集合测试有效。

- `pm.info.requestName:String`

  当前正在运行的接口用例名称

- `pm.info.requestId:String`

  当前正在运行的接口用例名称的唯一 ID

### pm.sendRequest

**`pm.sendRequest:Function`**

`pm.sendRequest` 用途为在脚本内异步发送 HTTP/HTTPS 请求。

- 该方法接受一个 collection SDK 兼容的 request 参数和一个 callback 函数参数。 callback 有 2 个参数，第一个是 error ，第二个是 collection SDK 兼容的 response。更多信息请查阅 [Collection SDK 文档](http://www.postmanlabs.com/postman-collection/Request.html#~definition) 。
- 在前置脚本和后置脚本都可以使用。

```javascript
// 简单个 GET 请求示例
pm.sendRequest('https://postman-echo.com/get', function (err, res) {
  if (err) {
    console.log(err);
  } else {
    pm.environment.set('variable_key', 'new_value');
  }
});

// 完整的 request 参数示例
const echoPostRequest = {
  url: 'https://postman-echo.com/post',
  method: 'POST',
  header: {
    headername1: 'value1',
    headername2: 'value2',
  },
  // body 为 x-www-form-urlencoded 格式
  body: {
    mode: 'urlencoded', // 此处为 urlencoded
    // 此处为 urlencoded
    urlencoded: [
      { key: 'account', value: 'apifox' },
      { key: 'password', value: '123456' },
    ],
  },
  /*
  // body 为 form-data 格式
  body: {
    mode: 'formdata', // 此处为 formdata
    // 此处为 formdata
    formdata: [
      { key: 'account', value: 'apifox' },
      { key: 'password', value: '123456' }
    ]
  }

  // body 为 json 格式
  header: {
    "Content-Type": "application/json", // 注意：header 需要加上 Content-Type
  },
  body: {
    mode: 'raw',// 此处为 raw
    raw: JSON.stringify({ account: 'apifox', password:'123456' }), // 序列化后的 json 字符串
  }

  // body 为 raw 或 json 格式
  body: {
    mode: 'raw',
    raw: '此处为 body 内容',
  }
  */
};
pm.sendRequest(echoPostRequest, function (err, res) {
  console.log(err ? err : res.json());
});

// 对返回结果进行断言
pm.sendRequest('https://postman-echo.com/get', function (err, res) {
  if (err) {
    console.log(err);
  }
  pm.test('response should be okay to process', function () {
    pm.expect(err).to.equal(null);
    pm.expect(res).to.have.property('code', 200);
    pm.expect(res).to.have.property('status', 'OK');
  });
});
```

参考:

- [Request JSON 结构](http://www.postmanlabs.com/postman-collection/Request.html#~definition)
- [Response 结构](http://www.postmanlabs.com/postman-collection/Response.html)

### pm.variables

`pm.variables:` [Variable SDK 参考](https://www.postmanlabs.com/postman-collection/Variable.html)

临时变量。不同类型的变量，有不同的优先级，不同类型变量的优先级顺序为： `临时变量` < `环境变量` < `全局变量` 。

- `pm.variables.has(variableName:String):function → Boolean`: 检查是否存在某个临时变量。
- `pm.variables.get(variableName:String):function → *`: get 单个临时变量。
- `pm.variables.set(variableName:String, variableValue:String):function → void`: set 单个临时变量。
- `pm.variables.replaceIn(variableName:String):function`: 以真实的值替换字符串里的包含的动态变量，如`{{variable_name}}`。
- `pm.variables.toObject():function → Object`: 以对象形式获取所有临时变量。

### pm.iterationData

`pm.iterationData:`

测试数据变量，因为测试数据是单独管理的，暂不支持在脚本中直接设置测试数据变量，但是您可以在脚本中访问测试数据变量，如下。

- `pm.iterationData.has(variableName:String):function → Boolean`: 检查是否存在某个测试数据变量。
- `pm.iterationData.get(variableName:String):function → *`: get 单个测试数据变量。
- `pm.iterationData.replaceIn(variableName:String):function`: 以真实的值替换字符串里的包含的动态变量，如`{{variable_name}}`。
- `pm.iterationData.toObject():function → Object`: 以对象形式获取所有测试数据变量。

### pm.environment

- `pm.environment.name:String`： 环境名。
- `pm.environment.has(variableName:String):function → Boolean`：检查是否存在某个环境变量。
- `pm.environment.get(variableName:String):function → *`：get 单个环境变量。
- `pm.environment.set(variableName:String, variableValue:String):function`：set 单个环境变量。
- `pm.environment.replaceIn(variableName:String):function`：以真实的值替换字符串里的包含的动态变量，如`{{variable_name}}`。
- `pm.environment.toObject():function → Object`：以对象形式获取当前环境的所有变量。
- `pm.environment.unset(variableName:String):function`： unset 单个环境变量。
- `pm.environment.clear():function`：清空当前环境的所有变量。

**注意：**

以上所有操作都是读写的`本地值`，而不会读写`远程值`。

### pm.globals

- `pm.globals.has(variableName:String):function → Boolean`：检查是否存在某个全局变量。

- `pm.globals.get(variableName:String):function → *`：get 单个全局变量。

- `pm.globals.set(variableName:String, variableValue:String):function`：set 单个全局变量。

- `pm.globals.replaceIn(variableName:String):function`：以真实的值替换字符串里的包含的动态变量，如`{{variable_name}}`。

  > 如前置脚本，获取请求参数的值如果包含变量，则需要使用 `pm.globals.replaceIn` 才能将变量替换会真正的值。

- `pm.globals.toObject():function → Object`：以对象形式获取所有全局变量。

- `pm.globals.unset(variableName:String):function`： unset 单个全局变量。

- `pm.globals.clear():function`：清空当前环境的全局变量。

**注意：**

以上所有操作都是读写的`本地值`，而不会读写`远程值`。

### pm.request

`pm.request:` [Request SDK 参考](https://www.postmanlabs.com/postman-collection/Request.html)

`request` 是接口请求对象。在前置脚本中表示`将要发送的请求`，在后置脚本中表示`已经发送了的请求`。

`request` 包含了以下结构：

- `pm.request.url`:[`Url`](http://www.postmanlabs.com/postman-collection/Url.html): 当前请求的 URL。
- `getBaseUrl()`：获取当前运行环境选择的的 `前置URL`，在 2.1.39 版本之后支持。
- `pm.request.headers`:[`HeaderList`](http://www.postmanlabs.com/postman-collection/HeaderList.html):当前请求的 headers 列表。
  - `pm.request.method`:`String` 当前请求的方法，如`GET`、`POST`等。
- `pm.request.body`:[`RequestBody`](http://www.postmanlabs.com/postman-collection/RequestBody.html): 当前请求的 body 体。
- `pm.request.headers.add({ key: headerName:String, value: headerValue:String})`:`function`: 给当前请求添加一个 key 为`headerName`的 header。
- `pm.request.headers.remove(headerName:String)`:`function`: 删除当前请求里 key 为`headerName`的 header
- `pm.request.headers.upsert({ key: headerName:String, value: headerValue:String})`:`function`: upsert key 为`headerName`的 header（如不存在则新增，如已存在则修改）。
- `pm.request.auth`: 当前请求的身份验证信息

> **以下部分 API 仅在`后置脚本`中可用**

### pm.response

`pm.response:` [Response SDK 参考](https://www.postmanlabs.com/postman-collection/Response.html)

在后置脚本中 `pm.response` 接口请求完成后返回的 response 信息。

response 包含了以下结构：

- `pm.response.code:Number`
- `pm.response.status:String`
- `pm.response.headers:`[`HeaderList`](http://www.postmanlabs.com/postman-collection/HeaderList.html)
- `pm.response.responseTime:Number`
- `pm.response.responseSize:Number`
- `pm.response.text():Function → String`
- `pm.response.json():Function → Object`
- `pm.response.setBody('')`

### pm.cookies

`pm.cookies:` [CookieList SDK 参考](https://www.postmanlabs.com/postman-collection/CookieList.html)

`cookies` 为当前请求对应域名下的 cookie 列表。

- `pm.cookies.has(cookieName:String):Function → Boolean`

  检查是否存在名为`cookieName`的 cookie 值

- `pm.cookies.get(cookieName:String):Function → String`

  get 名为`cookieName`的 cookie 值

- `pm.cookies.toObject:Function → Object`

  以对象形式获取当前域名下所有 cookie

- `pm.cookies.jar().clear(pm.request.url)`

  清空全局 cookies

:::tip 注意

pm.cookies 为接口请求后返回的 cookie，而不是接口请求发出去的 cookie。

:::

### pm.test

```
pm.test(testName:String, specFunction:Function):Function
```

该方法用来断言某个结果是否符合预期。

以下示例为检查返回的 respone 是否正确：

```javascript
pm.test('response should be okay to process', function () {
  pm.response.to.not.be.error;
  pm.response.to.have.jsonBody('');
  pm.response.to.not.have.jsonBody('error');
});
```

通过 callback 的可选参数 `done` ，还可用来测试异步方法：

```javascript
pm.test('async test', function (done) {
  setTimeout(() => {
    pm.expect(pm.response.code).to.equal(200);
    done();
  }, 1500);
});
```

- `pm.test.index():Function → Number`

  Get the total number tests from a specific location.

### pm.expect

```
pm.expect(assertion:*):Function → Assertion
```

`pm.expect` 是一个普通的断言方法，查看详细的说明：[ChaiJS expect BDD library](http://chaijs.com/api/bdd/)。

该方法用来断言 `response` 或 `variables`里的数据非常有用，更多关于 `pm.expect`断言的是示例，可以点击这里查看：[Assertion library examples](https://learning.postman.com/docs/writing-scripts/script-references/test-examples/)

### Response 对象可用的断言 API 列表

- `pm.response.to.have.status(code:Number)`
- `pm.response.to.have.status(reason:String)`
- `pm.response.to.have.header(key:String)`
- `pm.response.to.have.header(key:String, optionalValue:String)`
- `pm.response.to.have.body()`
- `pm.response.to.have.body(optionalValue:String)`
- `pm.response.to.have.body(optionalValue:RegExp)`
- `pm.response.to.have.jsonBody()`
- `pm.response.to.have.jsonBody(optionalExpectEqual:Object)`
- `pm.response.to.have.jsonBody(optionalExpectPath:String)`
- `pm.response.to.have.jsonBody(optionalExpectPath:String, optionalValue:*)`
- `pm.response.to.have.jsonSchema(schema:Object)`
- `pm.response.to.have.jsonSchema(schema:Object, ajvOptions:Object)`

### pm.response.to.be.\*

`pm.response.to.be` 是用来快速断言的一系列内置规则。

- `pm.response.to.be.info`

  检查状态码是否为`1XX`

- `pm.response.to.be.success`

  检查状态码是否为`2XX`

- `pm.response.to.be.redirection`

  检查状态码是否为`3XX`

- `pm.response.to.be.clientError`

  检查状态码是否为`4XX`

- `pm.response.to.be.serverError`

  检查状态码是否为`5XX`

- `pm.response.to.be.error`

  检查状态码是否为`4XX`或`5XX`

- `pm.response.to.be.ok`

  检查状态码是否为`200`

- `pm.response.to.be.accepted`

  检查状态码是否为`202`

- `pm.response.to.be.badRequest`

  检查状态码是否为`400`

- `pm.response.to.be.unauthorized`

  检查状态码是否为`401`

- `pm.response.to.be.forbidden`

  检查状态码是否为`403`

- `pm.response.to.be.notFound`

  检查状态码是否为`404`

- `pm.response.to.be.rateLimited`

  检查状态码是否为`429`
