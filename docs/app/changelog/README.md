---
title: 更新日志
toc: false
timeline: true
---

# 更新日志

升级方法：[Apifox](https://www.apifox.cn/) 软件内“检查更新”，或从[官网](https://www.apifox.cn/)手动下载。

::: tip Alpha 版说明

Alpha 版为新功能尝鲜版，需要加官方微信群、QQ 群或钉钉群，才能参与 Alpha 版内测。

加群方式：[apifox.cn/help/app/contact-us](../contact-us/)

1. Apifox 新功能都会先在 Alpha 版上线，等稳定后才会合到正式版。
2. Alpha 版可能会有一些 bug，如遇到问题及时在群里反馈，我们会第一时间解决。
3. Alpha 版和正式版数据是互通的。
4. 已经是 Alpha 版的，直接点击软件内更新。

:::

Apifox 已规划或正在开发中的需求，可以查看 [Road Map](https://apifox666.feishu.cn/base/bascnA8ZHro9a3k73zpI93f5DKf)

---

## 2.2.24-alpha.4

`2023-02-10`

- 🔥【新功能】新增 `通知设置`-`第三方集成` 功能，支持将通知消息集成到第三方软件平台、Webhook，详情请见 [通知设置](../webhook/)
- 🔥【新功能】接口管理中 `运行页的请求数据 Body 体 JSON/XML 格式` 的 `自动生成` 功能，新增 `仅生成字段名`、`使用请求示例`
- 🔥【新功能】连接 `MySQL` 数据库，使用 `SSH` 隧道时，支持`公钥`、`密码和公钥`两种验证方式
- 🔥【新功能】接口管理的顶部 Tab 栏，支持 `固定标签页`
- 🔥【新功能】接口管理-左侧目录树中所有文件的 `右键菜单功能` 新增与优化，包括接口 `右键支持分享、复制 cURL` 等，以及 UI 样式优化
- 🔥【新功能】分享的 API 文档新增 `亮暗模式` 切换、`Run in Apifox` 功能
- ⚡️【优化】 `接口唯一标识` 选择 Body/Header 参数时，支持 `Mock` 数据。详情请见 [接口唯一标识](../api-manage/api-unique-id/)
- ⚡️【优化】保存快捷键 `⌘/Ctrl+S` 全局优化
- ⚡️【优化】UI 界面显示相关的问题
- ⚡️【优化】脚本编辑器的 `右侧提示面板` 支持显示/收起
- ⚡️【优化】支持引用格式为 `aa.bb` 的变量
- ⚡️【优化】手动/自动导入数据时，优化 `导入到目录-匹配相同接口` 时的覆盖逻辑
- ⚡️【优化】在线分享文档中 `左侧目录树` 的接口名称展示问题
- ⚡️【优化】生成业务代码，生成代码后允许 `点击复制` 文件保存的目录路径
- ⚡️【优化】`左侧目录树` 收起状态下 `支持拖拽展开`
- ⚡️【优化】注销账号功能的 `退出团队` 提示优化
- ⚡️【优化】接口文档页中数据结构的 UI 样式优化
- ⚡️【优化】项目设置 UI 样式优化
- 🐞 解决 `快捷请求` 发送请求后，`后置脚本-提取变量` 使用 `JSONPath 提取工具` 时没有显示返回值的问题

## 2.2.23

`2023-02-10`

- ⚡️【优化】接口或数据模型 `数量较多` 时，项目进入的流畅度优化
- 🐞 解决 新建文档的 Tab 页 `首次点击输入框` 输入偶现自动失去焦点 的问题

## 2.2.22

`2023-02-06`

- 🔥【新功能】主窗口与项目窗口合并，新增项目 tab 层级，支持多项目频繁切换、拖动、调试接口
- 🔥【新功能】优化文档内数据结构的显示样式，参数信息更加易读
- 🔥【新功能】目录增加 `全部接口` tab，可以方便浏览所有接口的信息，并支持批量删除、批量移动等接口批量操作。详情请见 [接口批量管理](../api-manage/all-apis/)
- 🔥【新功能】API 文档内参数、变量的说明字段支持换行编辑并显示信息
- 🔥【新功能】优化文档内 Auth 的显示样式
- 🔥【新功能】发布文档设置自定义域名时，新增 `自有服务器中转` 方式。详情请见 [自定义域名绑定说明](../url-binding/)
- 🔥【新功能】变量本地值可设置跟随远程值
- 🔥【新功能】Markdown 语法支持 HTML 属性
- ⚡️【优化】Windows 客户端右上角窗口操作区域
- ⚡️【优化】通过 URL 导入文档后，保留上一次导入 URL
- ⚡️【优化】登录切换密码/验证码登录时，会保留已经输入的邮箱/手机号
- ⚡️【优化】接口运行对不同类型 Response（文件等）的响应显示样式
- ⚡️【优化】Markdown 编辑器调整工具栏
- ⚡️【优化】Markdown 文档编辑状态时，点击保存会保留在当前编辑界面
- ⚡️【优化】导入接口时，接口的匹配规则会根据每个目录的 `接口唯一标识` 进行匹配
- ⚡️【优化】导出端口被占用导致导出失败的问题
- ⚡️【优化】懒加载、异步加载组件的体验优化、卡顿优化
- 🐞 解决 JSONPath 表达式编辑框里的内容无法删除 的问题

## 2.2.19

`2023-01-31`

- ⚡️【优化】测试用例中 `流程控制` 能力相关样式优化
- ⚡️【优化】样式优化，组件、图标、背景色等的细节调整
- 🐞 解决 测试用例中的 `控制类型的步骤` 复制后无法添加步骤 的问题

## 2.2.18

`2023-01-20`

- 🔥【新功能】接口文档新增 `调试模式`，适合 `Code First` 的用户，可以直接发送请求。原本的 API 编辑方式名称改为 `文档模式`
- 🔥【新功能】接口文档增加接口级前后置操作，对该接口下属的所有接口用例生效
- 🔥【新功能】接口、接口用例中的前后置操作，增加展示上级前后置操作生效情况，可以明确看到一个接口运行时实际生效的前后置操作是哪些，并手动控制每一级的开关
- 🔥【新功能】测试用例中支持添加循环、判断等请求步骤 `流程控制` 能力
- 🔥【新功能】新增 API 文档、数据模型的 `修改历史`。详情请见 [接口修改历史](../api-manage/api-change-history/)
- 🔥【新功能】全新的 `数据模型` 编辑器。详情请见 [数据结构 / 数据模型](../api-manage/api-schema/)
- 🔥【新功能】 `Auth` 支持 `OAuth 1.0`
- 🔥【新功能】从 Swagger 导入文件，同步接口文档的同时，支持同步文档在 Swagger 内的目录字段。详情请见 [导入 OpenAPI (Swagger) 数据](../import/swagger/)
- 🔥【新功能】分享的 API 文档调试时，请求参数的 body 参数 为 json、xml、raw 时支持自动生成请求示例
- 🔥【新功能】分享的 API 文档，底部新增文档创建者显示、阅读浏览量显示、举报功能
- 🔥【新功能】接口运行时支持 Mock 返回图片字节流
- 🔥【新功能】Markdown 编辑器语法扩展，新增告示、折叠块样式
- 🔥【新功能】新增 Delete 快捷键支持删除接口管理左侧目录树下的所有文件类型
- 🔥【新功能】Windows 版本新增 Shift+Alt+W 快捷键，支持最小化至托盘后，切换显示/隐藏软件窗口
- 🔥【新功能】运行界面的返回响应 Body 体，Raw 类型支持复制和搜索，Preview 类型支持复制
- ⚡️【优化】分享的 API 文档中，接口参数名过长时展示的问题
- ⚡️【优化】APP 内弹窗组件全局优化
- ⚡️【优化】所有团队成员可自行设置昵称，团队管理员也可帮助其他人设置
- ⚡️【优化】自动导入功能性能优化
- ⚡️【优化】当响应示例是 JSON / XML 的时候，支持自动生成响应示例
- ⚡️【优化】当响应示例不是 JSON 的时候，不进行 JSON 纠错校验
- ⚡️【优化】Markdown 文档展示样式优化
- ⚡️【优化】接口管理、自动化测试、项目设置、在线分享的左侧目录树拖拽时支持自动收起、回弹
- ⚡️【优化】自动化测试的测试用例步骤被复制后，新生成的步骤会跟在被复制的步骤后面
- ⚡️【优化】修复了数据模型在某些情况下默认目录不对、排序不对的问题
- ⚡️【优化】修复了软件窗口缩小时，接口管理-新建页右侧页面无法向右滚动的问题
- ⚡️【优化】修复了数据模型的 Mock 值选项在特殊情况下显示不全的问题
- ⚡️【优化】公共脚本编辑时，使用 esc 键不会关闭弹窗
- 🐞 解决 运行页-请求 body 编辑框不支持连续 ctrl+z 撤销 的问题
- 🐞 解决 pm.request.getBaseUrl() 在自动化测试中获取不到当前服务 的问题
- 🐞 解决 数据模型生成代码时读取的名字是中文名而非字段名 的问题

## 2.2.14

`2022-12-19`

- 🔥【新功能】`Markdown 文档` 支持全新的编辑器，新增告示、折叠块两种 Markdown 新样式，优化 Markdown 语法的显示效果
- 🔥【新功能】`接口-修改文档` 页面，接口说明可以点击放大 icon，弹出完整的 `Markdown 编辑器`
- 🔥【新功能】复制单个接口链接发送给其他用户时，其他用户可直接跳转到客户端内的对应接口
- ⚡️【优化】导入 `knife4j` 格式时，兼容 OpenAPI 的 v3 api-docs
- ⚡️【优化】在测试报告列表页面，接口 URL 中的 Path 参数 {} 显示为实际生效的参数值

## 2.2.13

`2022-12-01`

- 🔥【新功能】全新的 `表格编辑器`，可调整列宽，优化交互操作
- 🔥【新功能】`邀请` 成员加入项目时，支持从团队成员列表中选择加入
- 🔥【新功能】数据库操作新增支持 `ClickHouse`
- 🔥【新功能】在线分享的文档链接，支持 `复制带密码的链接`，不需要手动输入密码
- 🔥【新功能】引用数据模型时，选择数据模型弹窗支持搜索。
- 🔥【新功能】客户端新增账号注销功能
- ⚡️【优化】 普通成员支持项目数据导出
- ⚡️【优化】接口运行页，当焦点在请求参数 Body 的代码编辑器时，支持快捷键 `cmd+Enter` 发送请求
- ⚡️【优化】目录设置过多前置操作、后置操作时，无法上下滑动的问题
- ⚡️【优化】分享的接口文档中的 `示例代码` 优先根据接口选择的服务显示前置 URL
- ⚡️【优化】特殊情况下 `运行环境` 单独导入导出时出现的问题
- ⚡️【优化】特殊情况下，新建立的 Markdown 文档无法插入接口的问题

## 2.2.11

`2022-11-27`

- 🐞 解决接口文档修改的 Header 的常用 Header 名在 2.2.10 版本没有提示 的问题

## 2.2.10

`2022-11-21`

- ⚡️【优化】项目导入时项目已被删除，或账号没权限时，显示对应提示
- 🐞 解决 接口请求 body 偶现带动态值的 JSON 格式化不生效 的问题
- 🐞 解决 测试套件选择导入用例偶现失败 的问题

## 2.2.9

`2022-11-16`

- 🔥【新功能】可以为接口配置 `接口唯一标识`，支持 `Method & Path`、`operationId`、`Query 参数`、`Body 参数`、`Header 参数`。详情请见 [接口唯一标识](../api-manage/api-unique-id/)
- 🔥【新功能】连接 MySQL 数据库时，支持使用 `SSH` 隧道
- 🔥【新功能】支持达梦数据库
- 🔥【新功能】在线文档支持配置顶部导航右侧功能区的 `图标` 和 `文字链接`，以及顶部的`通知`
- 🔥【新功能】自定义接口分享以及发布在线文档时，支持配置 `自定义字段` 的显示
- 🔥【新功能】接口文档的 `响应示例`，可以添加为 `高级 Mock 的期望`
- 🔥【新功能】在项目的功能设置中，可以将 `响应示例优先` 配置为 `默认 Mock 方式`
- 🔥【新功能】克隆项目时，包含 `测试用例` 和 `测试套件`
- 🔥【新功能】测试报告中的步骤，支持跳转到 `接口调试`
- 🔥【新功能】URL Encode 支持 `RFC 3986` 和 `WHATWG` 2 种规则
- 🔥【新功能】可以使用快捷键 `⌘/Ctrl+D` 复制目录和文件
- 🔥【新功能】筛选接口时，可以查看不同状态、标签、负责人的 `数量统计`
- 🔥【新功能】可以切换接口显示为 `名称` 还是 `URL`
- ⚡️【优化】 接口文档中的 `响应示例` 可以一键展开、收起
- ⚡️【优化】 接口文档中的 `请求参数` 和 `返回响应` 生成代码时，`模型名称` 不再相同
- ⚡️【优化】 在线文档的 `自定义域名` 审核速度加快
- ⚡️【优化】 导出接口用例时，包含 JSON 格式的 Body 的 `自动变化` 配置
- ⚡️【优化】 在测试用例中导入 `接口` 或 `接口用例` 时，改进了空文件夹的交互
- ⚡️【优化】 `返回校验`、`兼容 BigInt`、`URL Encode` 改为项目维度的配置
- ⚡️【优化】 鼠标移动到 `接口目录` 中时，展示滚动条
- ⚡️【优化】 鼠标移动到 `接口目录` 中的内容上时，可以展示接口的完整名称
- ⚡️【优化】 鼠标移动到 `测试用例` 的名称上时，可以展示用例的完整名称
- ⚡️【优化】 Mock 服务正常运行时，不再提示
- ⚡️【优化】 暗色主题的显示
- 🐞 解决了快捷请求中 Headers 和 Cookies 的 `动态参数` 无法正确保存的问题
- 🐞 解决了 Mock 数据中 `@dataImage` 不正确的问题
- 🐞 解决了快捷请求的 `URL` 为空时可以保存的问题
- 🐞 解决了云端 Agent 发起某些请求时没有携带请求体的问题
- 🐞 解决了添加 `断言` 后，有可能触发 Crash 的问题
- 🐞 解决了批量编辑 `测试数据` 时，界面可能卡顿的问题
- 🐞 解决了添加 `测试用例` 时，可能导致堆栈溢出的问题
- 🐞 解决了 Markdown 编辑器在小尺寸屏幕的显示问题
- 🐞 解决了编辑 `接口文档` 时，输入框定位的问题
- 🐞 解决了发布文档配置 `描述` 时，文本过长的显示问题
- 🐞 解决了在线文档中，`自定义字段` 在小尺寸屏幕的显示问题
- 🐞 解决了通知气泡的显示问题
- 🐞 解决了 2.2.9-alpha.1 的一些问题

## 2.2.8

`2022-11-13`

- ⚡️【优化】接口文档的请求参数名支持复制
- ⚡️【优化】邀请但未授权项目时弹出确认提醒用户
- 🐞 解决 接口调试 `继承父级目录 Auth 设置` 多级的时候偶现未生效的问题
- 🐞 解决 `返回响应 mock 设置` 中的身份证 ID 尾部带 X 的身份证字符串解析成数字的问题
- 🐞 解决 接口文档 `偶现响应示例消失` 问题
- 🐞 解决 接口请求结果 `提取为响应示例` 的在 2.2.7 版本没有默认推荐命名的问题

## 2.2.7

`2022-11-04`

- 🐞 解决 Cookie 或 Header Cookie 设置值使用变量值失效的问题

## 2.2.6

`2022-11-03`

- 🐞 解决接口调试 `请求结果` 展示在收缩侧边栏时，滚动条偶现异常的问题
- 🐞 解决接口调试 `示例值输入框` 鼠标移动上去后的样式问题
- 🐞 解决 `2.2.4, 2.2.5` 版本 `自定义脚本` 中使用 `pm.sendRequest` 发送请求 Header 值失效的问题

## 2.2.4

`2022-11-01`

- 🔥【新功能】`回收站`。在接口目录中被删除的接口文档、接口用例、数据模型、快捷请求、Markdown 文档，`会在回收站中继续保留 30 天，在这段时间内可以恢复被操作删除的数据`
- 🔥【新功能】在接口文档-运行页，请求 Body 内的 JSON / XML 可直接提取到接口文档的数据结构与示例值中
- 🔥【新功能】左下角的软件设置中新增 `关于 Apifox` 页面，可快速检查和更新软件版本，以及查看更新日志
- 🔥【新功能】点击右上角关闭程序时，Windows 版本支持最小化至系统托盘
- ⚡️【优化】支持使用 `后置脚本修改 Response`
- ⚡️【优化】项目普通成员可触发已经配置好的自动导入配置
- ⚡️【优化】从返回响应提取到接口文档时，优化覆盖的逻辑
- ⚡️【优化】环境、服务（前置 URL）支持搜索
- ⚡️【优化】目录树优化点击热区
- ⚡️【优化】发送请求操作会有 Title 提示可以使用 ⌘ Enter 快捷键进行操作
- ⚡️【优化】打开在线分享的接口文档时，输入密码存在空格的情况兼容
- ⚡️【优化】桌面版性能升级，解决打开内容过多时出现卡顿问题
- ⚡️【优化】接口调试请求结果里 `重定向 URL 部分` 去除重复的第一级 URL 信息
- 🐞 解决 多次添加一个 `测试用例、测试套件` 的弹窗，偶现父级目录显示问题
- 🐞 解决接口调试 `继承父级目录 Auth 设置` 多级的时候偶现未生效的问题

## 2.2.3

`2022-10-29`

- ⚡️【优化】请求超时时间限制最大输入值 (10 小时)
- ⚡️【优化】主窗口 `公开项目` 标签不显示跳转按钮
- ⚡️【优化】登录界面初始化接口错误时，显示网络错误界面
- 🐞 解决 `数据模型` **半引用** 后断言不正确的问题
- 🐞 解决 `Auth 功能` 切换类型的时候偶现失效的问题
- 🐞 解决 `自定义脚本` 中 `getBaseUrl` API 偶现失效的问题
- 🐞 解决 接口调试时 `发送并下载` 按钮偶现的下载失效问题

## 2.2.2

`2022-10-21`

- 🐞 解决 2.2.1 版本 `Socket` 协议部分类型接口运行异常的问题

## 2.2.1

`2022-10-16`

- 🐞 解决 2.2.0 版本导出 `OpenAPI` 固定值缺失的问题

## 2.2.0

`2022-10-15`

- 🔥【新功能】`接口用例` 和`接口文档` 运行页支持请求参数的新增、修改、删除。详情请见 [接口调试/接口用例](../api-manage/api-case/)

## 2.1.42

`2022-10-14`

- ⚡️【优化】接口请求结果里 `美化 JSON` 的特殊字符自动处理优化
- ⚡️【优化】接口请求结果里 `Visualize` 的结果主题色适配优化
- 🐞 解决 2.1.41 版本 mock 功能首次使用和示例项目导出失败的问题
- 🐞 解决 2.1.39 版本引用特定名字的变量下不生效的问题

## 2.1.39

`2022-10-08`

- 🔥【新功能】全新的登录页面，支持手机验证码、邮箱验证码登录
- 🔥【新功能】`JSON / XML 智能识别/快捷导入` 时，导入 JSON 时支持识别 `注释` 并写入说明；新增支持导入 `SQL 建表语句`。详情请见 [数据结构/数据模型](../api-manage/api-schema/)
- 🔥【新功能】`JSON / XML 智能识别/快捷导入` 时，新增 `智能合并` 模式默认，不会覆盖原有的中文名、说明、Mock 数据。详情请见 [数据结构/数据模型](../api-manage/api-schema/)
- 🔥【新功能】接口文档新增 `请求示例代码` 模块
- 🔥【新功能】运行时自定义脚本支持设置执行时机。详情请见 [自定义脚本支持设置执行时机](../scripts/examples/variable-substitution/)
- 🔥【新功能】`pm.request` 增加 `getBaseUrl` 方法
- 🔥【新功能】自定义脚本调用外部程序，调用 JAVA 时支持调用特定类的指定方法，详情请见 [使用方法](../scripts/api-references/external-programs/)
- 🔥【新功能】断言支持断言为枚举值之一
- 🔥【新功能】接口请求返回数据支持 `自动格式化 JSON 数据`
- 🔥【新功能】接口管理中 `运行页的请求数据 JSON / XML` 以及 `高级 Mock` 的编辑期望返回数据使用 `自动生成` 升级支持 `使用默认值、示例值、动态值`
- 🔥【新功能】数据结构引用数据模型时支持搜索
- 🔥【新功能】数据结构支持快捷键 `↑` `↓` 切换输入框，方便快捷填写说明
- 🔥【新功能】`数据结构/数据模型` `生成代码` 支持生成 SQL 建表语句，详情请见 [生成代码](../code-generator/)
- 🔥【新功能】请求参数、全局参数的必填项支持一键全选或取消
- 🔥【新功能】团队页面新增 `打开主窗口` 功能，可以快速打开新窗口
- 🔥【新功能】目录树搜索框支持搜索历史功能
- 🔥【新功能】快捷请求支持 `生成代码` 功能，详情请见 [生成代码](../code-generator/)
- 🔥【新功能】生成代码语言扩展，支持 `PHP - Guzzle、Dart - http、R - httr、R - RCurl`
- 🔥【新功能】发布 API 文档，新增二维码广告组件，支持自定义主题色
- 🔥【新功能】导出数据时支持所有格式导出环境，允许选择多个环境
- 🔥【新功能】环境管理中导入环境时支持导入 Postman 格式
- 🔥【新功能】测试套件设置多线程时支持 展示总耗时、平均接口请求耗时
- 🔥【新功能】自动化测试 `导入步骤/测试用例` 时，对已引用的 `测试用例/接口/接口用例` 做标记，并支持筛选
- 🔥【新功能】数据模型新增 `展示名` 字段，引用数据模型的节点会显示该数据模型的展示名
- 🔥【新功能】数据结构的 `高级设置` 新增设置项 `示例值 、 readOnly 、writeOnly`
- 🔥【新功能】数据结构的 `Format` 数据格式支持 `UUID` 选项
- 🔥【新功能】`数据结构/数据模型` 生成代码支持 `Dart 空安全`
- 🔥【新功能】页面底部新增 `本地 Mock 管理`，当由于端口占用或其他原因导致 Mock 功能不能正常运行时，支持报错提示、重启 Mcok 服务
- ⚡️【优化】发布 API 文档，文档右侧大纲宽度可拖拽，文档运行页面优化
- ⚡️【优化】从返回提取响应结构时，支持选择保留原响应的中文名、说明、Mock 数据等
- ⚡️【优化】自动化测试 `导入步骤/用例` 时，优化使用搜索/筛选后点击全选的逻辑，记录导入模式的选择
- ⚡️【优化】接口文档中 `请求示例` 使用自动生成的显示顺序与定义的字段顺序一致
- ⚡️【优化】`全局变量、环境变量` 存在变量名重复时 的交互问题
- ⚡️【优化】接口大文件发送/下载卡死、运行结果展示速度等性能优化
- ⚡️【优化】在线分享文档中数据模型的参数说明使用 Markdown 格式 的显示问题
- ⚡️【优化】导出的测试报告中接口请求情况 的展示问题
- ⚡️【优化】UI 界面显示相关的问题
- ⚡️【优化】关闭 Windows 客户端后，进程残留 的问题
- 🐞 解决 Web 端使用 Chrome Agent 发送请求时与 Cookie 管理功能冲突 的问题
- 🐞 解决 Swagger 的数据模型存在多层嵌套，导入数据时覆盖不生效 的问题
- 🐞 解决 数据模型的更多设置中打开 `不可等于最小值` 未生效 的问题
- 🐞 解决 接口文档 使用数据模型后，文档的中文名和说明显示异常 的问题
- 🐞 解决 后置操作 使用提取变量，提取方式从 ResponseJSON 切换为 ResponseText 时，切换提取范围为 整个返回数据后保存并运行时会报错 的问题
- 🐞 解决 2.1.38-alpha.4 版的一些问题

## 2.1.38

`2022-10-01`

- 🐞 解决部分场景下自动化测试的偶现问题

## 2.1.37

`2022-09-23`

- 🐞 解决 2.1.36 在线分享编辑修改时候圈选的接口无法回显已选择的接口数量 的问题

## 2.1.36

`2022-09-19`

- ⚡️【优化】测试用例/测试套件的编辑弹窗快捷键体验
- 🐞 解决 数据库变量提取、断言、提取变量等填写表达式结尾有空格的兼容问题
- 🐞 解决 测试用例/测试套件偶现编辑数据提交没有即时生效 的问题

## 2.1.35

`2022-09-10`

- 🔥【新功能】升级 `在线分享` 模块，支持发布 API 文档
- 🔥【新功能】发布 API 文档支持添加 `自定义导航` 等功能，详情可以看 [页面布局设置](../export/page-layout/)
- 🔥【新功能】发布 API 文档支持 `自定义域名功能`，详情可以看 [域名绑定说明](../url-binding/)
- 🔥【新功能】分享/发布的 API 文档，支持多语言设置（支持 `中文`、`英文`），详情可以看 [语言设置](../api-manage/project-language/)
- 🔥【新功能】接口请求结果支持 Visualize 可视化展示请求结果的数据，详情可以看 [Visualize 可视化数据](../scripts/examples/visualize/)
- 🔥【新功能】优化 `生成代码-生成接口请求代码` 的样式，增加 `cURL-WIndows`，`cURL-Linux` 格式
- 🔥【新功能】`接口运行-实际请求`，新增请求代码模块，方便调试接口后直接复制 `cURL` 等
- 🔥【新功能】`自动导入` 可选择是否导入接口用例
- 🔥【新功能】`全局参数-批量编辑` 窗口中新增冒号模式（原有批量编辑格式变更为逗号模式）
- 🔥【新功能】修改文档的分组设置时，支持新建分组
- 🔥【新功能】接口管理页面的 `顶部 Tab ` 支持鼠标中键关闭标签页，使用体验如浏览器一样
- 🔥【新功能】运行接口时开启分屏功能后，支持拖拽收缩 `校验响应` 窗口
- 🔥【新功能】自动化测试页面内的 `测试用例`、`测试套件` 的右侧目录树支持左右拉伸
- 🔥【新功能】运行接口时开启分屏功能后，`body` 的代码编辑器高度支持自适应
- ⚡️【优化】优化 OpenAPI 导入的部分不规则 content-type 的导入
- ⚡️【优化】新建文件、修改文件时的 loading 显示样式，减少对工作过程中的视觉干扰
- ⚡️【优化】新建文件或新建数据时，使用快捷键 Enter 或 Ctrl+S 时仅能保存并创建一个文件
- ⚡️【优化】当用户在接口文档、快捷请求修改前置操作、后置操作、body 代码、设置时，会将该文件 Tab 显示为修改状态
- ⚡️【优化】接口文档复制时，接口文档的响应示例会被复制
- ⚡️【优化】测试数据导入文件时，变量名会进行 trim 处理
- ⚡️【优化】接口调试时点击发送并下载，保存的文件名兼容中文
- ⚡️【优化】数据模型存在多层嵌套的情况下，优化 子节点必填属性同步显示 的问题
- 🐞 解决 特殊情况下自动导入过程中切换项目，导致数据导入到其他项目的问题
- 🐞 解决 多窗口的情况下字体大小设置不同步 的问题
- 🐞 解决 特殊情况下导入 Swagger 3.0 时，文件数组导入后显示为 string 的问题

## 2.1.34

`2022-08-16`

- 🐞 解决后置脚本中的 JSONPath 提取工具的偶现提取失败问题
- 🐞 解决接口调试的返回数据里包含 Bigint 数值类型时的精度丢失的问题
- 🐞 解决测试用例里关联的公共脚本被删除后，打开展示错误的问题

## 2.1.33

`2022-08-11`

- 🔥 【新功能】导出数据时选择 `导出 swagger` 格式，支持直接导出为离线文件，详情可以看 [导出数据](../export/)
- 🔥 【新功能】`接口管理` 页面的 `顶部 Tab` 支持拖拽排序，支持左右滑动，支持鼠标右键功能，使用体验如浏览器一样
- 🔥 【新功能】新增 `校验响应-全局开关`，在左下角 `设置-通用` 中设置，详情可以看 [校验响应](../api-manage/api-case/#校验响应)
- 🔥 【新功能】接口文档内的 `Mock 模块` 支持收缩不显示
- 🔥 【新功能】`测试套件` 导入 `测试用例` 时，支持搜索、筛选
- 🔥 【新功能】当 `自动化测试` 使用 `测试数据` 运行时，运行页面的 `循环次数` 旁新增显示 `数据集` 名称，方便定位运行失败的 `接口/接口用例` 使用的是哪条测试数据
- 🔥 【新功能】右上角切换 `环境` 时支持鼠标 hover 显示全称，解决环境名称过长看不全环境名称的问题
- 🔥 【新功能】`环境管理` 页面左侧环境列表支持鼠标右键功能
- ⚡️ 【优化】新增 BigInt 开关，优化了 bigint 精度问题
- ⚡️ 【优化】导入 `cURL` 支持 `cURL-u`
- ⚡️ 【优化】快捷键 `ctrl+s` 保存支持 `新建分组`、`分组设置`、`前置操作`、`后置操作` 等
- ⚡️ 【优化】`Mock 参数` 默认值优化
- ⚡️ 【优化】`请求参数` 批量编辑时，解决 由于表头不同导致复制粘贴无法生效的 问题
- ⚡️ 【优化】`导出` 数据时的报错提示优化，导出错误后可以按照提示解决问题
- ⚡️ 【优化】优化 `新建项目` 页面，支持使用示例数据
- ⚡️ 【优化】在 Apifox 内运行后的测试报告与客户端导出的测试报告，数值保持一致
- ⚡️ 【优化】在 Apifox 内运行后的测试报告和 CLI 产生的测试报告，数值保持一致
- ⚡️ 【优化】显示窗口全部关闭时，退出应用关闭进程
- ⚡️ 【优化】优化 OpenAPI 导入的部分不规则 content-type 的导入
- 🐞 解决特殊情况下 点击 `最近访问` 内的项目会显示无权限 的问题
- 🐞 解决特殊情况下 Query 参数选择了 array 数组格式导出 Jmeter 格式没反应 的问题
- 🐞 解决高级 mock 的期望填写不正确正则表达式时界面无法正常显示的问题
- 🐞 解决特定情况下双击打开的接口文档 tab 的偶现打开两个的问题
- 🐞 解决接口管理快捷键部分 input 组件数据保存失效问题
- 🐞 解决待授权代理配置会引起界面一直处于加载中的问题

## 2.1.32

`2022-07-28`

- 🐞 解决无法发起 socket 请求的问题
- 🐞 knife4j 解析地址触发 login 弹窗的问题
- 🐞 解决动态值中 动态变量 的 now 函数用法特定参数不符合预期的一些问题

## 2.1.30

`2022-07-25`

- 🐞 解决前置提取里的 JSONPath `继续提取`功能的偶现错误问题

## 2.1.29

`2022-07-19`

- 🔥 【新功能】 `网络代理` 支持单独配置接口请求的代理，详情可以看 [网络代理](../proxy/)
- 🐞 解决动态值函数 now 某些情况下失效的问题
- 🐞 解决生成部分业务代码时候无法导出的问题

## 2.1.28

`2022-07-14`

- 🔥【新功能】分享出去的 `在线接口文档` 支持修改 `环境变量` 在线调试，详情可以看 [在线文档](../export/online-docs/)
- 🔥【新功能】分享出去的 `在线接口文档` 支持 `URL 传参` 运行，详情可以看 [在线文档](../export/online-docs/)
- 🔥【新功能】导入支持 `knife4j 格式` 的接口，详情可以看 [导入数据](../import/)
- 🔥【新功能】`导入 Swagger` 时，如果没有 `x-apifox-status` 字段，默认不覆盖接口状态
- 🔥【新功能】增加新的接口状态：`已废弃（obsolete）`、`将废弃（deprecated）`
- 🔥【新功能】`项目概览` 页支持`自动导入`的全部数据源 `立即导入`
- 🔥【新功能】`导出 Swagger` 支持选择 Swagger 2.0、Swagger 3.0、Swagger 3.1
- 🔥【新功能】`导出` 部分单个接口时，只导出与接口相关的数据模型
- 🔥【新功能】接口运行后会自动固定 tab 标签页
- 🔥【新功能】接口返回内容增加 `提取到 响应定义` 和 `提取到 响应示例`
- 🔥【新功能】使用 `测试套件` 时支持跨 `测试用例` 的 `临时变量` 传递
- 🔥【新功能】支持 SVG 上传和展示
- 🔥【新功能】支持导入 Apipost 的接口说明
- ⚡️ 【优化】Json Path 提取变量优化，可提取出数值而非数组
- ⚡️ 【优化】当接口引用 `数据模型` 但 `数据模型` 被删除后，优化提示
- ⚡️ 【优化】修改 `接口文档` 时，优化 `标签` 功能的使用提示
- ⚡️ 【优化】`mock.js` 语法扩展，智能 Mock 支持更多数据
- ⚡️ 【优化】优化 `运行` 出错时的提示
- 🐞 解决 windows 系统的用户在 `测试用例` 页面，鼠标 hover 路径时点不到 `去修改` 的问题
- 🐞 解决 自动化测试导出测试报告 的一些问题

## 2.1.27

`2022-07-01`

- 🐞 解决账号的第三方绑定 `微信解绑` 提示不正确的问题

## 2.1.26

`2022-06-30`

- ⚡️ 【优化】接口文档负责人支持搜索
- 🐞 解决导出 `Markdown` 格式报错的问题
- 🐞 解决英文版`动态值`弹窗选择变量时，未显示变量列表的问题
- 🐞 解决接口文档编辑责任人清空后未保存的问题

## 2.1.25

`2022-06-24`

- 🔥 【新功能】增加 `自动 Encode URL` 功能，支持 URL 中的中文路径自动转译
- 🔥 【新功能】新建分组或改变接口分组时，支持搜索
- 🔥 【新功能】运行后的 `返回 body` 支持不换行显示
- 🔥 【新功能】 `测试数据` 支持导入 JSON
- 🔥 【新功能】 `数据库连接`支持 mysql8 的 caching_sha2_password 的加密方式
- ⚡️ 【优化】优化 `Web 端` 在 QQ 浏览器上的显示
- ⚡️ 【优化】 `实际请求` 中的 URL 支持点击复制
- ⚡️ 【优化】打开 `参数值` 编辑框，按 ctrl + s 可保存编辑弹窗内的内容
- ⚡️ 【优化】`测试数据` 支持其他 charset 非 utf8 类型的文件导入数据
- 🐞 解决 测试套件中测试用例过多时测试报告无法翻页 的问题
- 🐞 解决 收起目录树后快捷键无响应 的问题
- 🐞 解决 特殊情况下测试报告无法导出 的问题
- 🐞 解决 `动态值语法` 使用的变量值或变量属性值为 `数组或对象` 时应序列化展开的问题

## 2.1.24

`2022-06-17`

- ⚡️ 【优化】`快捷请求` Headers 选项添加内置参数选择
- ⚡️ 【优化】`接口调试分屏` 功能优化
- ⚡️ 【优化】`导入 ApiPost`、`导入 apizza` 的接口兼容
- 🐞 解决特定情况下导入 OpenApi 后 Body 参数中的数组文件 file 类型变成 string 的问题
- 🐞 解决特定情况下导入 OpenApi 文件内定义的 PATH 变量跟路径不匹配的问题
- 🐞 解决 `本地 mock` 的 body 设置为 form-data 或 www-form-url-encode，容易触发提示大小受限的问题
- 🐞 解决 `测试用例的步骤` 在首次进入设置时，`自动校验的关闭状态` 展示不对的问题

## 2.1.22

`2022-06-10`

- 🐞 解决新建环境时, 未成功保存前置 URL 的问题
- 🐞 解决`高级Mock`期望设置期望条件比较为`正则匹配`时，输入不正确导致接口页面报错无法打开的问题

## 2.1.20

`2022-06-02`

- ⚡️ 【优化】`动态值` 部分函数文案描述修正
- ⚡️ 【优化】`接口文档` 请求参数中 body 类型为 XML 时，初始化值的优化展示
- 🐞 解决特殊动态 host 类型的接口地址的 `本地 mock`、单接口 `生成代码` 使用异常的问题
- 🐞 解决 Web 端 Safari 浏览器的运行偶现错误的问题
- 🐞 解决特殊表单 `数据校验` 偶现引起的无法提交问题

## 2.1.18

`2022-05-30`

- 🔥 【新功能】分享出去的 `在线接口文档` 支持运行调试，详情请看 [在线文档](../export/online-docs/)
- 🔥 【新功能】上线 `云端 Mock 功能`，不用打开 Apifox 也能使用 Mock 数据功能，详情请看 [Mock 功能说明](../mock/)
- 🔥 【新功能】`邀请功能` 优化，支持链接邀请、邮箱邀请，详情请看 [邀请成员](../team/team-invitation/)
- 🔥 【新功能】`数据模型` 支持 `代码生成`，详情请看 [代码生成](../code-generator/)
- ⚡️ 【优化】导入 Postman 时，支持 Auth 导入
- ⚡️ 【优化】`自动导入` 增加 `最近导入时间`，详情请看 [导入 OpenAPI (Swagger) 数据](../import/swagger/)、[导入数据](../import/)
- ⚡️ 【优化】导出 Markdown 格式文件，显示数据结构中“中文名”字段
- ⚡️ 【优化】`前置操作、后置操作` 字数过长的显示问题
- ⚡️ 【优化】CLI 结果展示优化
- ⚡️ 【优化】接口列表、接口文档页、接口分享页，优化性能
- ⚡️ 【优化】接口列表，点击未选中接口时不自动展开该接口用例
- ⚡️ 【优化】环境变量支持设置为必填，当未设置变量值时给予提示
- ⚡️ 【优化】`测试用例` 导入步骤的顺序与勾选顺序保持一致
- 🐞 解决 特殊情况下 测试数据在修改数据集名称时，对应的变量会覆盖其他数据集 的问题
- 🐞 解决 字段设置了枚举值后，允许 NULL 在校验的时候不起作用了 的问题
- 🐞 解决 全局变量只修改变量名时，点击保存失效 的问题
- 🐞 解决 公共响应修改开关后，在线文档未及时同步 的问题
- 🐞 解决 创建项目时部分成员有时未显示 的问题
- 🐞 解决 导入 Jmeter 文件时，body 示例值中引号未解析 的问题

## 2.1.17

`2022-05-15`

- ⚡️ 【优化】`OpenAPI/Swagger` 等多种方式增加兼容 2.0 的 default 默认值导入
- ⚡️ 【优化】新建项目弹窗，团队成员较多的情况下成员名显示
- 🐞 解决全局变量 `只修改变量名称` 实际没有保存成功的问题
- 🐞 解决 `Query、Path 参数使用同名参数、不同值的特殊用法` 时取消全选触发值变化的问题
- 🐞 解决 `测试套件包含超过 20 个以上用例时` 筛选成功或失败后 `查看分页不能跳转` 的问题

## 2.1.16

`2022-05-12`

- ⚡️ 【优化】设置窗口的最小尺寸，兼容特定 Mac 系统 bug
- 🐞 解决导入特定接口文档数据，无返回响应时触发的界面崩溃问题

## 2.1.15

`2022-05-11`

- ⚡️ 【优化】生成代码时的本机 Java 环境检查
- 🐞 解决导出 `OpenApi` 格式可空与引用数据模型结合的时候类型不对应的问题
- 🐞 解决 `数据模型` 设置可空属性时，接口返回的自动校验偶现提示不正确的问题

## 2.1.14

`2022-05-08`

- 🔥 【新功能】自动导入支持 `导入多个数据源`、支持 `导入到具体分组`，详情请看 [导入数据](../import/)
- 🔥 【新功能】运行界面支持 `上下/左右分屏`
- 🔥 【新功能】接口文档增加 `自定义字段` 功能，详情请看 [自定义字段](../api-manage/api-fields/)
- 🔥 【新功能】导出数据、导入测试步骤，选择接口时，支持搜索、筛选，详情请看 [测试用例](../test-manage/test-case/) 、[导出数据](../export/)
- 🔥 【新功能】快捷请求 支持前置操作、后置操作
- 🔥 【新功能】分享在线文档时，可以选择分享的环境，详情请看 [在线文档](../export/online-docs/)
- 🔥 【新功能】支持 `设置字体大小`，详情请看 [软件使用介绍](../ui-introduction/)
- 🔥 【新功能】数据结构的 `字段名` 在文档页支持点击复制
- 🔥 【新功能】body 类型为 json 时，示例值添加 `动态值` 入口
- 🔥 【新功能】测试用例的 `步骤支持“复制”`，详情请看 [测试用例](../test-manage/test-case/)
- 🔥 【新功能】接口参数可 `一键开启/关闭`
- 🔥 【新功能】支持导入易文档格式的数据
- 🔥 【新功能】Web 端支持文件的上传调试
- ⚡️ 【优化】界面交互显示，包括：收缩目录树、全局消息显示、 tab 下拉菜单、接口请求错误展示、登录页支持设置语言和外观
- ⚡️ 【优化】`高级 mock 新增的比较功能`，兼容快捷请求
- ⚡️ 【优化】控制台自动打印数据库操作 `实际运行的 SQL`
- ⚡️ 【优化】CLI 前置操作/后置操作支持添加“等待时间”，后置操作断言支持判断“不为空”
- ⚡️ 【优化】关闭所有输入框内置的自动拼写检查
- ⚡️ 【优化】快捷请求保存时，`URL 前缀` 可选择保留
- ⚡️ 【优化】快捷请求未启用的字段保存后会保留
- ⚡️ 【优化】测试用例导入接口用例，默认选中“复制”
- ⚡️ 【优化】选择分组组件中分组顺序保持和目录树一致
- ⚡️ 【优化】json 断言对比“等于”时，`支持 array 和 object 对比`
- ⚡️ 【优化】快捷请求自动补全当前选中环境的前置 URL
- ⚡️ 【优化】快捷请求 URL 未填写 http 协议时, 自动添加 http 协议
- 🐞 解决 特殊情况下测试用例导出测试报告无反应 的问题
- 🐞 解决 运行页点击“去修改”无响应 的问题
- 🐞 解决 Markdown 文档快速点击 ctrl+s 时，文档保存内容丢失 的问题
- 🐞 解决 动态参数 mock string 函数未设置最小/最大长度时，偶现卡死 的问题
- 🐞 解决 `alpha 版本 2.1.12-alpha.1` 的一些偶现问题，同步 `2.1.12, 2.1.13` 的修复
- 🐞 解决 `alpha 版本 2.1.14-alpha.1` 的快捷请求没有自动跟随 URL 设置 Query 参数的问题
- 🐞 解决 `alpha 版本 2.1.14-alpha.3` 的全局变量本地值保存失效的问题
- 🐞 解决 `alpha 版本 2.1.14-alpha.3` 的项目排序问题
- 🐞 解决 `alpha 版本 2.1.14-alpha.3` 的导入 cURL 时不准确的问题

## 2.1.13

`2022-05-01`

- 🐞 解决 `2.1.12` 版本偶现的功能异常问题

## 2.1.12

`2022-04-30`

- 🐞 解决 `数据模型` 新旧版本同时使用时，偶现新版本展示数据模型缺失字段的问题

## 2.1.11

`2022-04-27`

- 🐞 解决 `高级Mock` 在自定义脚本中使用`fox.mockRequest.headers`无效的问题
- 🐞 解决 `接口` 在使用了继承引用的 `数据模型` 后, 校验响应失效的问题

## 2.1.10

`2022-04-26`

- ⚡️ 【优化】优化特殊 `数据模型` 引用使用在生成代码模块的支持
- 🐞 解决 `数据模型` 在 OpenAPI 特殊情况下的导入、导出的兼容
- 🐞 socket 类型接口调试偶现后置脚本处理后没有生效的问题

## 2.1.9

`2022-04-24`

- 🔥 【新功能】`数据模型` 支持多模型继承引用，且支持增加、减少字段（新版本修改后的数据结构在旧版无法正确显示，如果团队内多人使用，建议整个团队都升级到最新正式版）
- 🔥 【新功能】`数据模型` 支持字段排序
- 🐞 解决 `数据模型` 中因为引用同一模型过多次数导致 mock 数据生成错误的问题
- 🐞 解决 `数据模型` 中解除引用时失效问题
- 🐞 解决 `数据模型` 中引用必选值以及继承值丢失的问题
- 🐞 解决 `数据模型` 中字段优先级的显示错误问题
- 🐞 解决导出 OpenAPI 时 `数据模型` 数据错误的问题

## 2.1.8

`2022-04-13`

- ⚡️ 【优化】数据模型生成 mock 数据时，忽略数据模型中 `format` 字段
- 🐞 解决偶现测试用例无法运行的问题
- 🐞 解决 2.1.7 版快捷请求的发送按钮的发送中文案不正确的问题

## 2.1.7

`2022-04-03`

- 🔥 【新功能】`高级 Mock` 新增 `自定义 Mock 脚本` 详情见 [使用说明](../mock/mock-custom-scripts/)
- 🔥 【新功能】`高级 Mock` 期望支持拖拽排序，增加显示期望条件
- 🔥 【新功能】`高级 Mock` 期望条件新增`比较`功能
- 🔥 【新功能】我的团队列表支持拖拽排序
- 🔥 【新功能】`前置操作/后置操作` 支持添加`等待时间`
- 🔥 【新功能】`断言` 支持判断`不为空`
- ⚡️ 【优化】接口 `返回示例` 添加“格式化”按钮
- ⚡️ 【优化】`请求参数`、`body参数` 展示优化
- ⚡️ 【优化】`运行`、`接口用例`、`数据模型` 增加使用引导
- ⚡️ 【优化】示例值非 json 的时候以原样展示
- ⚡️ 【优化】`导入` 所有格式数据支持解析 /:param1/:param2 类型的 `path 参数`
- ⚡️ 【优化】点击底部栏右下角`?`按钮，快速访问 [帮助中心](https://www.apifox.cn/help/)
- 🐞 解决 部分场景下更改左侧树结构偶现滚动异常 的问题
- 🐞 解决 项目列表内非第一页的项目拖拽偶现排序失效 的问题
- 🐞 解决 部分特殊场景下数据结构数组 items 高级设置数量超大时会引起预览卡死 的问题

## 2.1.6

`2022-03-24`

- ⚡️ 【优化】接口文档页等的 JSON 层级展示
- ⚡️ 【优化】响应数据为空时展示`内容为空`
- 🐞 解决修复我的团队列表由于分页功能导致拖拽不准确的问题
- 🐞 解决接口文档的字段描述停留时间长偶现界面崩溃的问题
- 🐞 解决 `快捷请求` 的请求 Body 参数为 `json/raw/xml` 时，保存不生效的问题
- 🐞 解决 `eolinker` 导入报错的问题
- 🐞 解决导入数据模型 schema 格式不是合法 json 时报错的问题

## 2.1.5

`2022-03-20`

- 🐞 解决接口管理 `快捷请求` 新建按钮只点击 `+` 图标无响应的问题
- 🐞 解决多语言版本，复制 response 响应的成功提醒文案的问题
- 🐞 解决退出登录偶现系统兼容崩溃的问题

## 2.1.4

`2022-03-19`

- ⚡️ 【优化】滚动条、接口树侧边栏等的样式优化
- ⚡️ 【优化】WEB 版暂时禁止选择 Mock 环境（后续会支持使用该功能）
- 🐞 修复 APIHub 导出 OpenAPI、Markdown 和生成代码偶现异常的问题

## 2.1.3

`2022-03-17`

- ⚡️ 【优化】增加帮助提醒 `数据模型` 的模块入口位置变化
- 🐞 修复编辑用例时，对应接口文档运行页面出现保存用例提示的问题

## 2.1.2

`2022-03-16`

- 🐞 修复编辑快捷请求时父级分组显示错误的问题
- 🐞 修复左侧树跳转定位的问题
- 🐞 修复导入 cURL 忽略通用 Header 未生效的问题

## 2.1.1

`2022-03-15`

- 🔥 【新功能】`接口管理` 树状结构，支持右键操作
- 🔥 【新功能】`快捷请求` 功能优化，可单独保存为 `快捷请求` 等
- 🔥 【新功能】`接口管理` 树状结构，增加 `数据模型`、`快捷请求` 模块

## 2.0.4

`2022-03-14`

- 🐞 解决 Windows 系统选择环境不能切换选择的问题

## 2.0.3

`2022-03-12`

- 🔥 【新功能】导入功能支持根据 `分类、自选部分` 接口、多种`覆盖处理`方式，导入到 `指定分组` 等
- 🔥 【新功能】项目支持 `迁移到其他团队`
- 🔥 【新功能】分享文档允许设置是否展示 `责任人` 和 `修改时间`
- 🔥 【新功能】客户端内根据打开的 tab `定位文件目录` 所在位置
- 🔥 【新功能】数据模型展示更多字段属性：枚举、默认值、format 等
- ⚡️ 【优化】ApifoxCLI 支持设置是否重定向
- ⚡️ 【优化】导入 Swagger 特定 Query 参数的兼容处理
- ⚡️ 【优化】导出 OpenAPI 格式支持多个示例值
- ⚡️ 【优化】普通文档暗黑模式下 png 显示优化
- ⚡️ 【优化】自动化测试导出的报告中显示自动校验断言失败的信息
- ⚡️ 【优化】接口管理树状结构的底部图片遮挡热区
- ⚡️ 【优化】接口管理接口筛选增加可以按开启了的状态筛选
- ⚡️ 【优化】动态值里的动态变量搜索，支持中文搜索
- ⚡️ 【优化】微信登录页黑色主题下字体显示问题
- 🐞 解决导入特定 ShowDoc 文件格式的兼容问题
- 🐞 解决使用环境多服务的项目，偶现频繁触发请求接口前缀消失的问题
- 🐞 解决 Mac 系统选择文件时没记住用户上一次打开的目录问题
- 🐞 解决高级 mock 重复点击预览，预览内容没有更新的问题
- 🐞 解决数据模型中 mock 输入规则提示的固话正则错误的问题

## 2.0.2

`2022-02-17`

- 🔥 【新功能】分享支持选择分享更多设置（责任人与修改时间）
- ⚡️ 【优化】接口文档 Tab 页 UI 升级
- ⚡️ 【优化】导出选项默认开启导出接口用例
- ⚡️ 【优化】apidoc 导入方式的特殊数据兼容
- ⚡️ 【优化】调整头像处悬浮账号设置弹层的延迟关闭
- 🐞 修复批量编辑首次进入全选删除失效，优化批量编辑类型
- 🐞 自动化测试使用多线程压测的内存问题

## 2.0.1

`2022-02-13`

- 🐞 更正一些英文版翻译

## 2.0.0

`2022-02-10`

- 🔥 【新功能】UI 全新界面升级、支持更多主题背景。
- 🔥 【新功能】通用设置支持 **切换语言（英文版）** 。
- 🔥 【新功能】环境管理中支持环境导入、导出。
- 🔥 【新功能】实际请求支持响应时间明细。
- 🔥 【新功能】批量修改参数支持冒号模式、逗号编辑模式兼容 JSON 数据。
- 🔥 【新功能】请求参数的类型定义，支持 Query 参数的数组类型。
- ⚡️ 【优化】测试用例/套件跟随通用设置内的重定向设置。
- ⚡️ 【优化】生成 curl 代码时，包含 auth 参数。
- ⚡️ 【优化】客户端长时间运行的性能优化。
- ⚡️ 【优化】高级 Mock 预览生成的 JSON 格式化。
- ⚡️ 【优化】导出成 OpenAPI 格式时，any 类型的字段兼容优化。
- ⚡️ 【优化】接口 Tab 内容修改后 `固定 Tab` 和 `未保存状态` 优化。
- ⚡️ 【优化】优化兼容系统代理异常的情况。
- ⚡️ 【优化】保存变量时，自动去掉变量名中的空格。
- ⚡️ 【优化】数据库操作出错时将影响结果为不通过。
- ⚡️ 【优化】高级 mock 的 Nunjucks 语法 loop.index 的支持。
- ⚡️ 【优化】系统代理异常情况下，不受错误的代理端口影响。
- 🐞 自动导入中填写 file 协议数据 URL 的兼容。
- 🐞 自定义脚本中的接口请求点击展现的弹层展现层次问题。
- 🐞 运行页/用例页，参数值编辑框，偶现需要点击两次才激活编辑的问题。
- 🐞 切换账号之后，直接访问最近列表/收藏列表的展现优化。
- 🐞 修复数据结构编辑器偶现展示错乱的问题。

## 1.4.22

`2022-02-07`

- 🔥 【新功能】请求参数的类型定义，支持 Query 参数的数组类型。

## 1.4.21

`2022-01-18`

- ⚡️ 【优化】openapi 导入，示例字段 `example` 的优化。
- 🐞 解决多前置 URL 偶现失效的情况。
- 🐞 新建 tab 页打开多个情况下，关闭最初的一个后再次点击新建没有打开的问题。

## 1.4.20

`2022-01-14`

- 🐞 解决生成代码生成偶现失败的情况。

## 1.4.19

`2022-01-13`

- ⚡️ 【优化】导入`YAPI json` 文件时，数值类型 Mock 的数据兼容。
- ⚡️ 【优化】导入 `Swagger 配置文件` 配置 ref 引用不存在的数据兼容。
- 🐞 解决修改接口文档页面 Auth 偶现报错提示。

## 1.4.18

`2022-01-12`

- 🐞 解决接口管理通过 + 图标新建 Tab 页时会覆盖未固定接口页。

## 1.4.17

`2022-01-11`

- 🔥 【新功能】支持`部分导出`：指定部分接口、分组、文档。
- 🔥 【新功能】支持`部分分享`：指定部分接口、分组、文档、标签。
- 🔥 【新功能】全局、分组、接口、快捷调试支持设置 `AUTH` 。
- 🔥 【新功能】`项目概览`新增`项目统计`（接口数、接口用例数、数据模型数、测试用例数、测试套件数）。
- 🔥 【新功能】接口分组显示该分组下的`接口总数`。
- 🔥 【新功能】`Apifox CLI` 运行时支持自定义`报告名`。
- 🔥 【新功能】在线分享文档支持`文档`、`公共 Response`展示。
- 🔥 【新功能】测试用例、测试套件分组列表支持一键展开/收起。
- 🔥 【新功能】公开项目支持通过 web 访问、运行。
- 🔥 【新功能】设置增加`软件版本`模块，可查看 `Apifox` 版本号、检查更新、查看更新日志。
- 🔥 【新功能】团队管理项目名、团队成员支持搜索。
- 🔥 【新功能】文档 Markdown 编辑器升级、文档展示格式优化、支持跳转接口文档的短链接。
- 🔥 【新功能】添加 `通用设置` 模块，支持设置调试接口的 `请求超时时间`、自定义 `SSL` 证书、请求禁止重定向、发送无缓存 `no-cache` 头。
- ⚡️ 【优化】修改文档后，自动更新`运行页`未更改过的参数值。
- ⚡️ 【优化】测试用例、测试用例添加步骤数量限制。
- ⚡️ 【优化】环境管理支持 `CTRL+S` 快捷保存。
- ⚡️ 【优化】放大缩小窗口时，编辑器自适应显示。
- ⚡️ 【优化】Apifox CLI 支持`全局参数`。
- ⚡️ 【优化】发起请求过滤已关闭的空参数字段。
- ⚡️ 【优化】文档中参数值过长时自动换行显示。
- ⚡️ 【优化】测试报告中断言名过长时显示问题。
- ⚡️ 【优化】文档中 `JSON 数组`显示键的问题。
- ⚡️ 【优化】导入`swagger yaml`文件时，导入请求参数示例值。
- ⚡️ 【优化】当设置的状态码不合法时无法访问 `mock` 服务的问题。
- ⚡️ 【优化】`生成代码`从全屏切换为小窗口时，侧边菜单栏显示问题。
- ⚡️ 【优化】`克隆项目`时，接口示例值未克隆的问题。
- ⚡️ 【优化】在线文档接口数超过 30 个时默认收起。
- ⚡️ 【优化】数据模型的字段描述支持 Markdown 链接跳转。
- ⚡️ 【优化】测试套件导出的报告里，增加失败汇总。
- ⚡️ 【优化】接口数量较多时，项目页初始化流畅度卡顿优化。
- 🐞 解决 query 参数和 path 参数，引用同名环境变量和全局变量优先级问题。
- 🐞 解决进入文档编辑页，接口显示默认服务的问题。
- 🐞 解决数组嵌套数组时，文档预览结构显示问题。
- 🐞 解决数组嵌套多层数组时，子节点类型识别问题。
- 🐞 解决测试管理里赋值环境变量后，从接口管理处获取到的变量值有缓存的问题。
- 🐞 解决 `windows` 系统，系统全局代理设置有误时，软件不使用代理不生效的问题。
- 🐞 解决 Mac 系统下部分环境调用外部 JS 代码失败问题。
- 🐞 解决测试数据，数据集名称重复时翻页显示问题。
- 🐞 解决导入 Swagger2 文件的 HTML 地址时，分组无法导入的问题。
- 🐞 解决用例/运行页，body 为 JSON 或 XML 格式时，点击保存用例，body 值为空的问题。

## 1.4.15

`2021-12-31`

- 🐞 解决环境管理里删除已选中的当前环境的时候，环境列表没有刷新的问题。

## 1.4.14

`2021-11-12`

- 🔥 【新功能】`动态参数`全新升级
  - 参数值升级为动态参数，支持：变量、常量、动态变量、自定义表达式。
  - 键入变量编辑框时，下拉菜单显示符合的`全局变量`和`环境变量`，并显示变量值。
  - 鼠标悬停 `动态参数`上时，直观显示变量/表达式结果值。
  - 动态变量支持 `Mock.js` 语法，发起请求时动态使用 mock 值
  - 自定义表达式支持 `Nunjucks` 模板语法，按条件生成不同参数值
  - `动态参数`支持多种常用函数(如 Encodeurl、MD5 加密等)，可多层叠加，直接预览最终结果
- ⚡️ 【优化】高级 `Mock` 功能升级
  - 返回数据支持 `Mock.js`、 `Nunjucks` 模板语法
  - 支持自定义返回的 `Header 值`、`HTTP 状态码`、`响应延迟时间`

## 1.4.10

`2021-10-29`

- 🔥 【新功能】上线 `API Hub`功能。
  - 通过`API Hub`查找/发现他人公开的 `API` 项目。
  - 可将项目发布到`API Hub`（设置为公开项目即可），允许任何人通过`API Hub`访问、克隆该项目。
- 🔥 【新功能】增加`文档`功能，支持 Markdown 语法，编辑时可同步预览。
- 🔥 【新功能】接口列表支持根据`状态`、`标签`筛选。
- 🔥 【新功能】增加`项目收藏`功能。
- 🔥 【新功能】增加`最近访问`项目功能。
- 🔥 【新功能】环境允许设置为`私人`(仅本人可见)/`公共`。
- 🔥 【新功能】前、后置操作里的每一项支持设置`启用`、`停用`，方便调试。
- 🔥 【新功能】GET 请求支持 Body 参数。
- 🔥 【新功能】新增项目列表`拖拽排序`功能。
- 🔥 【新功能】新增用户`主动退出团队`功能。
- 🔥 【新功能】新增`用户头像`功能。
- 🔥 【新功能】新增`项目图标`功能。
- 🔥 【新功能】新增`展开/收起`全部接口分组功能。
- 🔥 【新功能】自动导入数据支持`Apifox 格式`。
- 🔥 【新功能】接口信息新增 `OperationId` ，导出 Swagger 文档时包含该字段。
- 🔥 【新功能】接口信息支持设置`原始文档地址`。
- 🔥 【新功能】导入/导出 OpenAPI 格式，增加自定义扩展：
  - 增加扩展 `x-apifox-folder`：表示接口分组名，如果属性值中含有字符 `/` 则自动分为`多级目录`。
  - 导入 OpenAPI 格式时，`接口分组`优先读取 `x-apifox-folder` 属性，其次读取`tag name` 属性。详情请看 [Apifox Swagger 扩展](../../reference/swagger-extension)
- 🔥 【新功能】支持点击鼠标中键关闭 tab 页。
- ⚡️ 【优化】合并展示 HTTP 和 SOCKET 接口。
- ⚡️ 【优化】允许将接口放在根目录。
- ⚡️ 【优化】接口调试/接口用例更方便的`开启/关闭`自动校验“返回 Response ”功能。
- ⚡️ 【优化】标签输入优化：下拉框自动提示本项目所有`标签`。
- ⚡️ 【优化】接口运行结果中有链接时，支持点击链接在浏览器中打开。
- ⚡️ 【优化】断言信息限制展示高度，内容过长时可滚动展示。
- ⚡️ 【优化】解散团队时进行二次确认，防止误操作。
- ⚡️ 【优化】导入 JMeter 文件时，有接口未选中 method 时仍支持导入。
- ⚡️ 【优化】若接口管理处用例发生变更，无需重新进测试管理-用例页，直接运行也能按更新后的数据发起请求。
- ⚡️ 【优化】Windows 系统测试用例/套件，下拉菜单难以选中的问题。
- ⚡️ 【优化】Windows 系统删除操作时确认弹窗样式问题。
- ⚡️ 【优化】保存接口时自动识别并去除路径前后的空格。
- ⚡️ 【优化】样式优化，所有提示图标组件透明度设置为 25% 。
- ⚡️ 【优化】支持 Linux 系统下设置禁用 GPU 加速。
- 🐞 解决后置操作添加 2 个 `SQLServer` 数据库操作步骤时，第二个 SQL 会运行失败的问题。
- 🐞 解决 Oracle 数据库运行 Update 语句没有生效的问题
- 🐞 解决在接口管理页打开生成代码&选中"接口请求代码"，再切到"数据模型"打开生成代码，会显示空白的问题。
- 🐞 解决导入 swagger 文件后运行，int 类型的请求字段参数值为空的问题。
- 🐞 解决测试用例/套件分类修改，选中`根目录`时修改失效的问题。
- 🐞 解决非完整链接的接口，选择了非 mock 的环境时，生成代码按钮失效的问题。
- 🐞 解决只读用户可以修改接口/接口分类/数据模型/数据模型分类的问题。
- 🐞 解决多服务下，接口生成的`cURL`命令地址为默认服务而非选中服务的问题。

## 1.4.7

`2021-09-10`

- 🔥 【新功能】支持一个环境设置多个`前置URL`（解决一个项目内有不同接口使用不同`前置URL`问题）。
- 🔥 【新功能】支持`全局`设置（在`项目概览`里设置）前置操作、后置操作，设置后`项目`里的所有接口运行时都会生效。
- 🔥 【新功能】支持`分组`里设置前置操作、后置操作、前置 URL，设置后`分组`里的所有接口运行时都会生效。
- 🔥 【新功能】增加`克隆项目`功能（可克隆项目到当前团队或其他团队）。
- 🔥 【新功能】支持更多接口状态（设计中、待确定、开发中、联调中、测试中、已测完、已发布、已废弃、有异常），可自自行设置是否启用各种接口状态。
- ⚡️ 【优化】凸显`快捷调试`入口，方便新人认识使用该功能。
- ⚡️ 【优化】接口管理增加根目录`项目概览`，方便快速打开`项目概览`。
- ⚡️ 【优化】测试用例、测试套件运行时优化（解决循序次数过大时会出现卡住的问题）。
- ⚡️ 【优化】`分类`改名为`分组`。
- ⚡️ 【优化】JSON/XML 智能识别输入框展示优化：将`JSON/XML`拆分成`JSON`、`XML`两个 tab。
- ⚡️ 【优化】允许普通成员（项目权限）管理公共脚本。
- ⚡️ 【优化】环境`Mock服务`固定写死`名称`、`前置URL`，禁止删除，防止误操作。
- 🐞 解决部分场景下导入 RAP 接口文档，Body 参数没有导入进来的问题。
- 🐞 解决部分场景下导入 Swagger2 格式的时候，Request Body 未识别为 json 的问题。
- 🐞 解决部分情况`导入curl` query 参数未被正确识别的问题。
- 🐞 解决部分情况使用快捷键`Ctrl+Enter`发起请求，没有带上接口参数值、没有运行前后置脚本、有时提示没有选中环境的问题。
- 🐞 解决根节点设置`允许 NULL`时，mock 数据异常的问题。

## 1.4.5

`2021-08-24`

- 🔥【新功能】环境里的`额外参数`升级为`全局参数`。
  - `全局参数`可设置是否所有接口`默认启用`；每个接口可单独设置是否启用。
  - `全局参数`可设置是`默认值`；每个接口运行时可单独设置`参数值`。
- 🔥【新功能】`测试数据`功能升级。
  - 测试数据支持云端同步，成员之间共享测试数据。
  - 支持在线编辑测试数据。
  - 同一个`测试用例`支持不同环境使用不同测试数据。
- 🔥 【新功能】支持微信登录，已注册的账号支持绑定微信。
- 🔥 【新功能】自定义脚本内置库支持 RSA 加密解密（使用 npm 库：[jsrsasign](https://www.npmjs.com/package/jsrsasign)）。
- 🔥 【新功能】自定义脚本支持调用未内置的 npm JS 库（使用`pm.liveRequire`方法动态加载），[查看文档](../scripts/api-references/library-reference/)。
- ⚡️ 【优化】接口复制功能优化。
  - 增加复制整个目录功能。
  - 复制接口同时复制接口下的用例。
- ⚡️ 【优化】Apifox CLI 支持数据库操作。
- ⚡️ 【优化】高级 Mock 期望条件支持 json 格式的 Body 参数（使用 JSON Path 匹配）。
- ⚡️ 【优化】接口 Body 参数内容长度限制从`50KB`增加到`10MB`。
- ⚡️ 【优化】数据模型分类下增加`添加子分类`选项，新建分类的时候允许选择`父级分类`。
- ⚡️ 【优化】运行接口，用户未选择环境时，提示语显示到"环境选择框"的下方。
- 🐞 解决接口和环境额外参数里都设置了`Content-Type`时导致请求时产生多个`Content-Type`的问题。
- 🐞 解决接口路径太长时，运行界面把后面 2 个按钮撑出界面的问题。
- 🐞 解决文件上传，保存用例后再次打开，没有显示对应文件的问题。

## 1.4.4

`2021-07-25`

- 🐞 解决 1.4.3 版部分情况下 Mock 生成的数据有异常的问题。

## 1.4.3

`2021-07-22`

- 🔥【新功能】环境管理功能升级，支持环境复制和排序。
- 🔥【持续集成】Apifox CLI 支持使用 URL 方式运行“测试用例”和“测试套件”，无需导出数据，且实时更新数据。
- 🔥【接口管理】解决导出 Apifox 文件再导入时部分数据未导入的问题。
- 🐞 解决“编辑接口文档时，分类只能选最末尾的分类，不能选倒数第二级的分类”的问题。
- 🐞 解决自动导入时设置“不覆盖”时无效的问题。
- 🐞 解决数据结构里的 mock 下拉框，定位到选项后，按回车键不能自动填充的问题。
- 🐞 解决数据结构编辑器修改字段类型后，中文名、mock 内容被清空的问题。
- 🐞 解决接口文档设置响应字段允许 null 之后，该字段的 mock 规则不生效的问题。
- 🐞 解决数据结构 array 类型在展示的时候不显示字段名的问题。
- 🐞 解决编辑接口字段时，光标未移出编辑框，直接 ctrl+s 保存失败的问题。

## 1.4.0

`2021-07-12`

- 🔥【新功能】支持多窗口打开多个项目。
- 🔥【测试用例】导入【接口用例】时可选择`绑定`模式，绑定后修改【接口用例】后会实时同步更新到【测试用例】里。
- 🔥【提取变量】`提取来源`增加支持“Response Header”、“Response Cookie”。
- 🔥【断言】`断言对象`增加支持“Response Header”、“Response Cookie” 、“环境变量”、“全局变量”、“临时变量”。
- ⚡️【样式】Windows/Linux 版本采用和 mac 一样的无边框/无状态栏设计。
- ⚡️【测试管理】测试用例/测试套件增加复制功能。
- ⚡️【其他】双击顶部栏可以最大化。
- ⚡️【主题】主题色设置功能放到【设置】里。
- ⚡️【其他】新建项目时，普通成员的项目权限默认设置为【禁止访问】。
- ⚡️【接口管理】`公共 Response`升级为`全局 Response`。
- ⚡️【接口管理】创建内容时，如果没有任何分类，则增加一个选项“默认分类”。
- ⚡️【Mock】高级 Mock 新建期望【返回数据】处加上“自动生成”功能。
- ⚡️【接口管理】接口管理里的 Tab 窗口增加“关闭其他所有 Tab”项。
- ⚡️【Cookie】Cookie 管理样式升级。
- ⚡️【其他】其他优化界面细节。
- 🐞 解决在线分享功能设置接口文档有效时间后，又将有效日期置空，保存后无效的问题。
- 🐞 解决接口描述里有\$0 等特殊字符时，导出的 html 格式的文件打开会报错。
- 🐞 解决导入 NEI 格式接口数据，请求/响应里的 object 类型数据没有子节点
- 🐞 解决在线分享的接口无法搜索接口名问题。

## 1.3.11

`2021-06-08`

- ⚡️ 测试报告增加导出功能。
- ⚡️ 允许只读成员修改`环境变量`和`全局变量`的`本地值`。
- ⚡️ `断言`不通过时展示详细原因（包括期望值和实际值）。
- ⚡️ 优化界面细节。
- 🐞 解决断言功能用`等于`方式断言`数字类型`值时不准确的问题。
- 🐞 解决导入 Eolinker 格式数据，数据结构直接引用另一个数据结构时，无法解析的问题。

## 1.3.10

`2021-06-04`

- ⚡️ 测试报表（测试套件）详情增加筛选项。
- 🐞 解决断言功能用`等于`方式断言`数字类型`值时不准确的问题。

---

## 1.3.9

`2021-06-02`

- ⚡️ 整体样式细节优化。
- ⚡️ 测试报表（测试用例）详情增加筛选项，可筛选查看所有失败的步骤。
- ⚡️ 导入 Postman 格式支持导入前置脚本、后置脚本。
- 🐞 解决亮主题看不到登录界面/注册界面的 logo 文字的问题。
- 🐞 解决断言功提取到的值为数字，且使用正则匹配时，断言始终报错的问题。
- 🐞 其他 bug 修改。

## 1.3.8

`2021-05-28`

- ⚡️ 测试报告支持批量删除、支持翻页。
- ⚡️ `测试用例`分类下可直接`添加测试用例`，`测试套件`分类下可直接`添加测试套件`。
- ⚡️ `提取变量`的表达式支持使用`变量`。
- ⚡️ 数据模型 icon 展示优化。
- ⚡️ 支持导入`NEI`格式数据。
- 🐞 解决部分场景下 Path 中包含`:`时，被误识别为 Path 参数问题。
- 🐞 解决测试套件勾选`保存变量变化值`无效问题。
- 🐞 解决`GET`请求包含 body 参数时，在接口文档里不展示 body 参数的问题。

## 1.3.7

`2021-05-20`

- ⚡️ 断言里的值支持使用引用变量。

## 1.3.6

`2021-05-13`

- ⚡️ 接口树形列表中展示接口状态（开发中、测试中、已上线、已废弃）。
- ⚡️ 其他细节优化。

## 1.3.5

`2021-05-10`

- 🐞 解决`Socket`接口某些场景下使用报错的问题。

## 1.3.4

`2021-05-06`

- 🔥 新增`自动导入`功能，可设置定时自动导入`OpenAPI (Swagger)`、`apiDoc`格式接口数据。
- ⚡️ 运行接口时允许选择`不校验`接口返回的状态码和数据结构（`返回 Response`选择`不校验`即可）。
- ⚡️ 优化导入`apiDoc 格式`数据效果。
- 🐞 解决首次登录时，会出现打开`数据库连接`页面空白问题。

## 1.3.3

`2021-04-25`

- ⚡️ 新增支持`导入 apiDoc 格式`数据。

## 1.3.2

`2021-04-19`

- 🐞 解决`导入 Postman 格式数据`时，如数据里有`url`为`null`时导入报错的问题。

## 1.3.1

`2021-04-17`

- 🐞 解决`测试管理`里的`测试用例`和`测试套件`无法运行含`数据库操作`的用例。

## 1.3.0

`2021-04-16`

- 🔥 前置/后置脚本、断言、提取变量，升级为`前置操作`/`后置操作`。
  - `前置操作`/`后置操作`里支持添加“断言、提取变量、数据库操作、自定义脚本、公共脚本”等动作。
  - `前置操作`/`后置操作`支持添加`数据库操作`，可读写数据库数据，查询结果可在接口请求参数、断言等场景中使用。
  - `前置操作`/`后置操作`未来会支持更多动作类型，将原本需要写代码实现的功能界面化，降低使用难度和提高使用效率。
- ⚡️ 优化 断言名称支持使用变量。
- ⚡️ 优化 导入数据支持 ApiPost 数据格式。
- 🐞 解决控制台看不到通过`自定义脚本`发送的接口请求信息。

## 1.2.5

`2021-04-03`

- ⚡️ 导入数据优化：
- 导入 Postman、HAR、JMeter 格式允许选择`接口路径保留前置 URL`。
- 导入 Swagger 2 数据允许选择`接口路径加上 basePath`。

## 1.2.4

`2021-03-26`

- 🐞 解决部分场景下新建接口点击”保存“按钮卡住的问题。
- 🐞 解决部分场景下通过 url 导入 swagger 数据提示权限限制问题。

## 1.2.2

`2021-03-18`

- 🐞 解决部分场景下数据结构 mock 出的数据不符合预期的问题。

## 1.2.1

`2021-03-17`

- ⚡️ 新增 设置【网络代理】功能，允许通过代理发送接口请求，默认使用`系统代理`。
- ⚡️ 优化 添加`断言`和`提取变量`里的`JSON Path`、`XPath`使用指引。

## 1.2.0

`2021-03-14`

- 🔥 新增【在线分享接口文档】功能。
- ⚡️ 优化 可视化断言功能支持使用变量。
- ⚡️ 优化 数据结构展示：1、允许选择复制内容。2、优化引用模型时候的展示（减少层级，更直观）
- ⚡️ 优化 主页 Tab 增加“关闭全部 Tab”功能。
- ⚡️ 优化 `快捷调试`支持上传文件。
- ⚡️ 优化 其他部分细节。
- 🐞 解决测试用例里点开接口详情调试时，当前界面无法选择环境、点击`管理公共 Response`和`管理公共脚本`没有反应的问题。
- 🐞 解决部分情况下数据结构 object 类型字段点击`添加相邻节点`没有反应的问题。
- 🐞 解决部分情况下导入 Postman 数据报错的问题。

## 1.1.21

`2021-02-20`

- 🐞 解决打开部分情况下`导入抓包数据`无反应问题。

## 1.1.18

`2021-02-09`

- 🔥 布局升级

  - `接口管理`、`测试管理`、`数据模型`、`项目设置`，统一采用 tab 方式切换，模块之间来回切换时保持已打开内容不被覆盖，方便同时操作不同模块内容。
  - 支持拖拽方式调整侧边栏宽度。
  - 打开`控制台`时，内容不被遮挡。

- 🐞 解决打开`控制台`时侧边栏底部部分内容无法点击问题。

- 🐞 解决部分情况`断言`负数出现判断错误问题。

## 1.1.17

`2021-01-26`

- 🐞 解决部分场景下运行`测试套件`时未运行`公共脚本`问题。

## 1.1.16

`2021-01-25`

- 🐞 解决导入`ApiPost`格式后`数据结构`字段重复问题。

## 1.1.15

`2021-01-18`

- 🐞 解决数据结构`allOf`、`oneOf`、`anyOf`里包含引用模式时，无法正确 mock 出数据问题。

- 🐞 解决快捷调试无法自动添加环境变量里的`前置URL`问题。

- 🐞 解决测试用例（或测试套件）循环测试的结果里第二轮及后续循环结果都误展示为第一轮循环的结果。

## 1.1.12

`2021-01-13`

- ⚡️ 优化 导入 Swagger 数据时，自动导入参数示例值

- ⚡️ 优化 部分细节。

- 🐞 解决部分场景运行接口时没有自动校验数据结构问题。

- 🐞 解决一个`测试套件`里不同`测试用例`无法共享环境变量/全局变量的问题。

- 🐞 解决部分场景调试接口时未显示`返回 Cookie`和`返回 Header`问题。

- 🐞 解决`快捷调试`返回的 json 数据展示时没有格式化的问题。

- 🐞 解决接口返回的 json 数据里`bigint`数据精度丢失问题。

- 🐞 解决导入 Swagger 格式数据，部分场景`Path 参数`重复问题。

## 1.1.7

`2021-01-11`

- ⚡️ 优化 测试用例添加步骤。
- ⚡️ 优化 导入数据展示

## 1.1.4

`2021-01-06`

- 🐞 解决 查看测试报告都显示`旧版数据，不兼容`问题。
- 🐞 解决 测试套件无法导出 Apifox CLI 格式数据问题。

## 1.1.0

`2021-01-04`

- 🔥 新增快速 `断言`和`提取变量` 功能，无需写脚本就可以设置`断言`和从运行结果里`提取变量`了。
- 🔥 新增 测试用例和测试套件支持`上传测试文件`（csv 或 json），将测试文件里的数据作为变量值批量循环测试。
- 🔥 Socket 接口相关功能全面升级。
- ⚡️ 优化 数据结构支持设置字段的`中文名`，支持展示 json schema 里字段的 title。
- ⚡️ 优化 部分细节。
- 🐞 解决 导入 OpenAPI (Swagger) 数据时，path 参数无法正确解析的问题。
- 🐞 解决 导入 OpenAPI (Swagger) 数据时，数据结构 allOf、anyOf、oneOf 中包含 \$ref 时无法正确解析的问题。

## 1.0.0

`2020-12-28`

- 🔥 1.0.0 版正式发布