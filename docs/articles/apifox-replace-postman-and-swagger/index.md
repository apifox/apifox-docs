# 替代 Postman + Swagger！Apifox 才是 YYDS！

作为一个后端开发，我做的大部分项目一般都是基于 Swagger 来管理 API 文档，基于 Postman 来做接口调试，基于 JMeter 来做接口性能测试，基于 RAP 等工具 Mock API 数据。

我经常在想：“特么的，要不要这么麻烦？有没有一款工具能够直接提供这些功能？经常在不同的工具之间切换来切换去真的很烦呢！”。

我在网上找了很久，终于让我找到了一款集 API 文档、API 调试、API Mock、API 自动化测试一体化协作平台 — **Apifox**。

## Apifox 介绍

官方对 Apifox 定位是： **Apifox = Postman + Swagger + Mock + JMeter** 。

有了 Apifox，我们只需要定义接口文档就可以直接使用接口调试&测试、数据 Mock 等功能。并且，接口调试完成后即可保证和接口文档定义完全一致。高效、及时、准确！

根据官网描述，Apifox 主要为我们提供了下面这 4 类功能：

1. **接口设计** ：可视化文档管理，高效便捷，零学习成本! 遵循业界的 OpenApi 3.0 (原 Swagger)、JSON Schema 规范。
2. **接口调试** ：这个基本就是 Postman 有的功能，Apifox 上都有。
3. **接口自动化测试** ：这个基本就是 JMeter 有的功能，Apifox 上都有，并且要更好用。不过，这个功能目前仍然在持续开发中。
4. **接口数据 Mock** ：内置 Mock.js 规则引擎，非常方便 mock 出各种数据。

除了上面介绍的功能之外，Apifox 还提供了 CI 持续集成、数据库操作、自动生成代码、数据导入/导出、团队协作等等开箱即用的功能。

![Apifox官网-功能特性](https://cdn.apifox.cn/markdown-img/202201/01/Apifox%E5%8A%9F%E8%83%BD%E7%89%B9%E6%80%A7.png)

## Apifox 下载

直接在 Apifox 的官网地址：https://www.apifox.cn/# 即可下载对应操作系统的安装包，一键安装，非常方便！

![Apifox官网-首屏](https://cdn.apifox.cn/markdown-img/202201/01/Apifox%E5%AE%98%E7%BD%91-%E9%A6%96%E5%B1%8F.png)

这里要说明一点的是：**Apifox 支持 macOS（Intel 和 M1 芯片都支持）,Windows,Linux** 。

Apifox 的登录页面如下，是支持微信登录的，比较方便。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2.png)

## 快速上手

### 外观设置

不吹不黑，整个软件的界面设计的真心好看，而且使用起来非常流畅！

你还可以在设置中调整界面的背景和主色。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E5%A4%96%E8%A7%82.png)

### API Hub

Apifox 自带了很多第三方平台的开放 API 信息。

![](https://cdn.apifox.cn/markdown-img/202201/01/apihub.png)

![](https://cdn.apifox.cn/markdown-img/202201/01/apihub-%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1.png)

### 创建团队和项目

你可以直接创建团队以及示例项目。如果你只是想体验一下 Apifox 功能的话，可以直接使用 Apifox 自带的示例团队和项目。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E5%9B%A2%E9%98%9F&%E9%A1%B9%E7%9B%AE.png)

为了方便，我这里就以 Apifox 自带的示例项目来简单介绍 Apifox 的常用功能。

### 在线分享接口文档

Apifox 支持在线分享接口文档。我们直接在项目概览的页面就可以找到对应的功能按钮。

我们还可以为接口文档设置访问密码和过期时间。

![在线分享接口文档功能](https://cdn.apifox.cn/markdown-img/202201/01/image-20211203165932313.png)

分享完成之后，我们就可以在线访问了！效果如下（速度还挺快，挺流畅）：

![apifox在线分享文档](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E5%9C%A8%E7%BA%BF%E5%88%86%E4%BA%AB%E6%96%87%E6%A1%A3.png)

体验地址：[https://www.apipark.cn/s/ce387612-cfdb-478a-b604-b96d1dbc511b/http/5041285](https://www.apipark.cn/s/ce387612-cfdb-478a-b604-b96d1dbc511b/http/5041285)

### 接口设计

接口设计即定义接口文档规范（如接口路径、参数、返回值、数据结构等）。

打开具体的项目之后，点击左侧搜索框旁边的 `+` 号按钮即可新建接口。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E6%8E%A5%E5%8F%A3%E8%AE%BE%E8%AE%A1.png)

### 接口调试

设计好的接口可以直接像 Postman 那样进行调试。

![image-20220109131103524](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E6%8E%A5%E5%8F%A3%E8%B0%83%E8%AF%95.png)

如果需要像 Postman 那样不用提前设计接口就能快速调试，我们可以使用快速调试功能。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E5%BF%AB%E9%80%9F%E8%B0%83%E8%AF%95.png)

### 接口数据 Mock

前端可以利用 Mock 功能来快速制造假数据接口用于开发和调试。

![](https://cdn.apifox.cn/markdown-img/202201/01/%E6%8E%A5%E5%8F%A3%E6%95%B0%E6%8D%AEmock.png)

定义数据结构的时候，我们还可以手动设置 mock 规则，完全兼容 Mock.js（数据占位符方式）。

![](https://cdn.apifox.cn/markdown-img/202201/01/%E8%87%AA%E5%AE%9A%E4%B9%89mock%E8%A7%84%E5%88%99.png)

高级 mock 还可以自定义数据结构（不受接口数据结构限制)，并且可以根据不同的请求参数值返回不同的数据。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E9%AB%98%E7%BA%A7mock.png)

### 代码自动生成

Apifox 可以根据接口模型的定义，自动生成多种语言（Java、Go、Kotlin、Dart、C++、C#、Rust 等）的业务代码。并且，如果生成的代码不满足你的需求，你还可以自定义代码模板来生成符合自己团队的架构规范的代码。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E4%BB%A3%E7%A0%81%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90.png)

### 脚本

这个和 Postman 脚本的使用方式类似，允许对一个 HTTP 请求之前（前置操作）和之后（后置操作）分别运行自定义的一段脚本。并且，Postman 脚本可以无缝迁移到 Apifox。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E8%84%9A%E6%9C%AC.png)

### 断言

Apifox 支持在后置操作中可视化设置断言。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox.png)

运行接口后，即可查看断言的结果。

### 导入导出数据

Apifox 支持多种数据格式，并且，可以自动同步指定 URL 的数据源。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA%E6%95%B0%E6%8D%AE.png)

你可以将数据导出为 OpenApi (Swagger)、Markdown、Html 等数据格式。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA%E6%95%B0%E6%8D%AE2.png)

如果你需要 PDF、Word 、OpenOffice、Epub 等格式的话，你可以使用 Typora 将 Markdown 导出为这类格式。

## 总结

从上面我对 Apifox 的功能描述就可以看出这完全称得上一款优秀的国产软件，整个软件的构想也确实解决了咱们开发人员的痛点。

看了一下 Apifox 开发团队的后续规划，我觉得还挺值得期待的！

随着版本的迭代，Apifox 也会提供类似 JMeter 的接口性能测试功能，并且还会提供插件市场以丰富软件的功能。

![](https://cdn.apifox.cn/markdown-img/202201/01/apifox%E5%90%8E%E7%BB%AD%E8%A7%84%E5%88%92.png)

国产开源！加油！！！

## Apifox 交流群

扫二维码加微信，拉你进微信群：

<img alt="Apifox 微信群" src="https://cdn.apifox.cn/www/assets/image/index/contact-wechat.png" width="300px" />

QQ 群（219822573）二维码 ：

<img alt="Apifox QQ群" src="https://cdn.apifox.cn/www/assets/image/index/contact-qq.jpg" width="300px" />
