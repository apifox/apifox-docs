# CSRF token 如何处理



参考文章：

https://blogs.sap.com/2019/08/27/csrf-token-in-postman.-one-click-to-get-it-and-use-it./

https://ithelp.ithome.com.tw/articles/10208593

## 全自动实现方式

### 期望效果

1. 运行接口用例的时候，自动完成获取 CSRF token 并注入请求 Header，而无需手动操作。

### 实现思路

1. 创建一个 [公共脚本](../../scripts/common-script/) 。
2. 使用[pm.sendrequest ](../../scripts/api-references/pm-reference/#pm-sendrequest)请求一个可以获取 CSRF token 接口（从 header 或者 cookie 获取）
3. [脚本直接修改请求信息](../../scripts/examples/request-handle/)，将获取到的 token 注入请求的 header 或者 cookie。
4. 在接口的 [前置脚本](../../scripts/pre-request-scripts/) 里引用前面创建公共脚本。

:::

### 公共脚本示例

:::tip 注意

- [pm.sendrequest 参考文档](../../scripts/api-references/pm-reference/#pm-sendrequest)

:::

```js

// 构造一个用来获取 CSRF token 的请求
var csrfRequest = pm.request.clone();
csrfRequest.method = 'GET';
if (pm.request.method === 'POST') {
    // 构造一个获取获取 CSRF token 的 URL，这里这个 URL 如果获取到 csrf-token，则需要根据实际情况修改
    csrfRequest.url = pm.request.url + '?$top=1';
}

// 此处根据实际情况决定是否要增加一个 key 为 x-csrf-token 的 header
csrfRequest.upsertHeader({
    key: 'x-csrf-token',
    value: 'fetch'
});

// 发送获取 CSRF token 请求
console.log('获取 CSRF token 请求开始');
pm.sendRequest(csrfRequest, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        var csrfToken = res.headers.get('x-csrf-token');
        if (csrfToken) {
            console.log('csrfToken fetched:' + csrfToken);
            // 将获取到的 CSRF token 注入当前请求的 header
            pm.request.headers.upsert({
                key: 'x-csrf-token',
                value: csrfToken
            });
        } else {
            console.log('没有获取到 CSRF token');
        }
    }
    console.log('获取 CSRF token 请求结束');
});
```

