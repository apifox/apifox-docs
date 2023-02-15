# 后置脚本

后置脚本是在`请求发送完成后`执行的代码片段。主要用来`断言`请求返回的结果是否正确、将请求返回的结果数据写入环境变量等。

## 使用示例

#### 断言请求返回的结果是否正确

```javascript
// pm.response.to.have 示例
pm.test('返回结果状态码为 200', function() {
  pm.response.to.have.status(200);
});

// pm.expect() 示例
pm.test('当前为正式环境', function() {
  pm.expect(pm.environment.get('env')).to.equal('production');
});

// response assertions 示例
pm.test('返回结果没有错误', function() {
  pm.response.to.not.be.error;
  pm.response.to.have.jsonBody('');
  pm.response.to.not.have.jsonBody('error');
});

// pm.response.to.be* 示例
pm.test('返回结果没有错', function() {
  // assert that the status code is 200
  pm.response.to.be.ok; // info, success, redirection, clientError,  serverError, are other variants
  // assert that the response has a valid JSON body
  pm.response.to.be.withBody;
  pm.response.to.be.json; // this assertion also checks if a body  exists, so the above check is not needed
});
```

#### 将请求返回的结果数据写入环境变量

```javascript
// 获取 JSON 格式的请求返回数据
var jsonData = pm.response.json();

// 将 jsonData.token 的值写入环境变量
pm.environment.set('token', jsonData.token);
```

## 更多示例

1. [更多测试/断言示例](../examples/tests/)
2. [使用变量（环境变量、全局变量、临时变量）示例](../examples/variables/)
3. [脚本内发送接口请求](../examples/other/#发送接口请求)
4. [读取接口请求信息](../examples/request-handle/)
5. [加密/解密](../examples/other/#加密-解密)
