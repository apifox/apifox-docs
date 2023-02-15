# Apifox Mock 功能全解析
## 前端的痛苦

作为前端，最痛苦的是什么时候？

每个迭代，需求文档跟设计稿都出来了，静态页面唰唰两天就做完了。可是做前端又不是简单地把后端吐出来的数据放到页面上就完了，还有各种前端处理逻辑啊。

后端接口还没出来，我就得边写代码边测前端效果，又没有真实数据。有人建议用 Mock 工具，可是每个接口都要自己写 Mock 规则，这得浪费多少时间呀。

等到后端好不容易把接口写出来了，一对接联调，好多字段的数据又跟我 Mock 的数据对不上，又得重新改代码。

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/02/180013-RVN8v4.png" width="300px" />


每个迭代都是一次折磨。

就是那种，明明知道这个地方整个团队都可以更有效率，但偏偏就是做不到的**无力感**。


## 黎明的希望

直到有一天，我遇到这个神器。我的效率提升了 100%。

我可以用最省力最优雅的方式得到我需要的 Mock 数据，甚至不需要任何配置。而且，联调时候曾经遇到的各种令人崩溃的前后端数据对接问题，统统不！见！了！

就是这个⬇️

![Apifox](https://cdn.apifox.cn/markdown-img/202204/02/180040-PC3rjA.png)

我研究了整整一周，越研究越是心惊。这个工具太强大，完全超出我的预期，就如《倚天屠龙记》里张无忌修炼的乾坤大挪移，练完一层，上面还有一层，每一层都是一片全新的天地。

我曾经以为，定接口什么的你们后端定就行了，跟我前端有什么关系。定好了吐数据给我就行了。

我曾经以为，写接口文档什么的完全是浪费时间，边写代码边改接口不好嘛。

直到我遇到这个神器，我才明白好的工作习惯能给我提升多少效率。

现在的我已经不一样了。我认为这款神器能够把全中国前端程序员的工作效率都提升一倍。我也希望在读这篇文章的你，能够好好把这款工具用起来。

以下还有 3000 字，阅读时长 5～10 分钟。如果你嫌读文字太麻烦，这里也有个视频，内容是一样的。

<iframe src="//player.bilibili.com/player.html?aid=382574576&bvid=BV1BZ4y1B7tD&cid=558386197&page=1&high_quality=1&danmaku=0 " scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" height="550" allowfullscreen="true"> </iframe>

好，接下来我要发功了。

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/02/180121-RKILEa.png" width="300px" />


## 第一层：智能 Mock 

Apifox 是个 API 协作工具，用它来做 Mock 数据的基础也是 API 文档。在 Apifox 里维护的 API 可以生成好看的在线接口文档，也可以像 Postman 那样一键调试，像 JMeter 那样做测试，还可以直接 Mock 数据。不过今天我们只聊 **Mock**。

首先，你需要在 Apifox 里面创建一个接口，定义好`请求参数`和`返回数据结构`。

好了，保存。完成！

……………………

等会儿？Mock 呢？怎么就完成了？Mock 规则在哪儿写？

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/06/102905-nc9MoT.png" width="300px" />

真的就完成了。

Apifox 会自动启动一个本地的 Mock 服务，我复制一下 Apifox 自动生成的 Mock 地址，用浏览器打开看下效果。

![Apifox](https://cdn.apifox.cn/markdown-img/202204/06/103000-P3zbqi.png)

就是这么简单！就是这么方便！

什么！都不需要！配置！

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/06/103112-QaY9zM.png" width="300px" />

其实我们遇到的大部分 API 返回数据都是通用的，用户名、手机号、地址、邮箱、时间戳，等等等等。但是你要去写 Mock 规则就很麻烦。**你要怎么生成一个看起来合理的中国人名？**

在 Apifox 里面，这变成了最简单的事情，甚至是完全无感的。只要写 API 文档的时候把返回的**数据结构**定义好，这个事情就完成了。Apifox 会根据**字段名称**智能生成 Mock 数据，**不需要任何配置**。

如接口返回的数据结构里某个字段名称叫`username`就会得到“程敏”“王宁”“~~安慕希~~”“~~李玛璧~~”。

字段名称叫`phone`，就会得到`15237829132`、`18907284633`。

字段名称叫`city`，就会得到`杭州市`、`高雄市`、`博尔塔拉蒙古自治州`。

甚至如果你的字段名称叫`icon`，就会返回一个`图片 URL`，打开就真的是一张 png 图片！

如果你们团队使用的是 Swagger 等其他工具管理 API 文档，也可以导入到 Apifox（Apifox 支持 20 多种格式数据导入，还可以设置**定时自动导入**），一样可以使用这个智能 Mock，一样是**零配置**自动生成所有 Mock 数据。

完全不用操心任何 Mock 数据配置的问题，只要接口定好了，Mock 数据就有了，我什么前端代码都能写。

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/06/103156-vyXG8c.png" width="300px" />

## 第二层：自定义智能 Mock 规则

有的同学问，你这个都是预设死的吧？我怎么知道写什么参数名称你会给我 Mock 出什么数据来？好，这就是 Apifox Mock 功能的第二层：自定义智能 Mock 规则。

在 Apifox 里面内置了一整套 Mock 规则，当我们的返回字段名匹配上了其中的某条规则，就会根据对应规则生成随机值（Mock.js 语法规则）。

![Apifox 内置智能 Mock 规则](https://cdn.apifox.cn/markdown-img/202204/02/180254-SzH4XR.png)

字段名称的匹配方式支持通配符和正则表达式，比如字段只要以 “url” 结尾，就会得到一个正确的网址；以 “mail” 打头，就会得到一个邮箱地址。

要是以 “time” 结尾，那还会自动根据字段的数据类型来 Mock 值：string 类型的话就返回一个 'yyyy-mm-dd hh:mm:ss' 格式时间；integer 类型的话就返回一个时间戳。是不是很智能？！

有内置规则，当然就可以自定义新规则。

比如我们公司的订单 id 是以 “DD” 打头的十位数字，我就可以新建一个 string 类型的规则，匹配规则写 “*orderid” ， mock 规则写一个正则表达式：@regexp(/DD\d{10}/)。这样，只要我任何一个接口返回字段是以 “orderid” 结尾，都会得到一个 “DD1284918414” 这样的返回值。

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/02/180401-4JrLGw.gif" width="50px" />


## 第三层：返回字段高级设置 
 
有的同学说，你这个是比较通用的数据类型，可我还有很多没那么通用的类型，比如宠物店上架的宠物，有三种状态：可售、已售、待上架，要怎么 Mock 出来？ 

在 Apifox 里面，定义接口返回数据结构的时候每个字段都有一个“高级设置”的概念。比如我宠物的上架状态还可以定义为枚举，枚举可选值为（“available”，“sold”，“pending”）。如果接口这样定义了，那么 Mock 就会自动从这三个字符串里取值。

![返回字段高级设置](https://cdn.apifox.cn/markdown-img/202204/02/180418-lScXZe.png)

这个字段高级设置里不止有枚举，还可以设置长度范围、正则规则等。如果字段类型是数字，还可以设置最大值最小值等。 

如果你对 JSON Schema 比较熟的话，也可以直接写 Schema，那可定义空间就更大了。

而且我们要注意：这个时候我们设的其实不是 Mock 规则，而是接口返回值的数据结构定义，这个是会对接口调试的**自动校验**功能生效的，如果后端接口返回的数据不符合这里的设置，Apifox 会返回一个“**数据结构校验失败**”，就告诉后端你接口返回数据结构不对。

而我们的 Mock 数据也是根据这里的设置自动生成，不需要任何额外配置。 

![怼后端专用图](https://cdn.apifox.cn/markdown-img/202204/02/180435-4CKWSK.png)

爽不爽，可以直接甩一张截图去怼后端了。

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/02/180454-9KqN9W.png" width="300px" />

## 第四层：接口级自定义 Mock 

有的同学说，那我还有一种场景，比如我这个用户名字段，数据定义里其实是允许他输入任意字符串的，可是我 Mock 是需要一个真实姓名的，不能靠字段定义啊。

而且，你刚才演示的都是中国人名，我的客户都是欧美人怎么办。

啊，终于要针对特定接口设置一点点规则了。

![可选的 Mock 规则](https://cdn.apifox.cn/markdown-img/202204/02/180516-zVDBkX.png)

在 Apifox 里，给接口定义数据结构的时候是可以给每个字段设置 Mock 规则的，而且直接就可以选一系列的常用 Mock 规则，常见的各种数据类型其实都齐全了。比如我需要一个外文人名，我就可以在这里写 @name，运行一下就会得到 “Larry Smith” “Susan Lee” 这样的英文名。

如果前面说的智能 Mock 满足不了你，在这里设置规则就可以覆盖掉内置规则。这里支持 Mock.js 和正则表达式，只要你能想到的规则，全都 Mock 得出来。

![Mock 规则参考](https://cdn.apifox.cn/markdown-img/202204/02/180538-JLqf45.png)

而且 Apifox 支持 **数据模型（Schema）** 定义，不同的接口可以复用相同的数据模型，模型里定义的规则在所有引用它的接口里都会生效，不需要任何额外的配置。

一次 Mock，终身享受。

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/02/180612-QUmGpf.png" width="300px" />

## 第五层：高级 Mock 

还有那么一些同学，他们说，希望能让我自己定义：根据不同的参数值，返回不同的数据。

比如我请求的参数`宠物ID` 为 `1` 就返回一个在售的宠物数据，如果`宠物ID` 为 `2` 就返回一个已售的宠物数据。我前端可以把几种状态的页面都做出来。

好吧，Apifox mock 的第五层就是为你准备的。 

在 Apifox 的“接口管理” 有一个 “高级 Mock” 标签页。在这里我们可以添加“期望”。

![Apifox 高级 Mock](https://cdn.apifox.cn/markdown-img/202204/02/180639-upyLJy.png)

一个期望就是指当你的请求包含某个参数值的时候，就返回特定的数据。

比如我设定我的`1`号宠物是在售的，`2`号宠物是已售出的，`3`号宠物是记录不存在的，DDD 号宠物是“ ID 格式不正确”的。我把这些返回值都设好。

之后，我发送的请求参数是`1`的时候，就返回一个在售的宠物信息；`2`返回一个已售的；`3`返回一个“404 not found”，`4`返回一个“Invalid Param”。

啊，简直能模拟出来一个后端服务器了！

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/02/180657-Qaq7C9.png" width="100px" />


## 第六层：高级 Mock 语法 

你觉得这个 Mock 功能已经非常强大了是吧。我最开头提了张无忌，你知道张无忌的乾坤大挪移总共有几层吗？

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/02/180711-mjW4GZ.png" width="300px" />


我们进入高级 Mock 写期望的时候，鼠标放在这个支持 “Mock.js 语法”上会浮出来一段示例。

![高级 Mock 的语法示例](https://cdn.apifox.cn/markdown-img/202204/02/180731-H22Qzf.png)

这个示例是讲什么的呢？我们可以在 Apifox 里面实际运行一下试试。

![以上示例的返回结果](https://cdn.apifox.cn/markdown-img/202204/02/180747-lkFR9j.png)

它生成了一个 JSON 格式的数组！

总共有 20 组 id 和名字，比如你在前端要生成一个填满数据的二维表格，一次就能 Mock 一整套！只需要短短几行代码！

我们回来看这个语法示例，正常的 JSON 里面插入了大括号百分号包裹的两段 “for” 代码，它就是 JS 模板语法（Nunjucks语法），可以使用它来生成复杂的数据结构！

不但支持 for 循环！还支持 if 分支！还支持正则表达式！还支持调用函数！

你说！是不是有我（加上 Apifox）就够了！还要后端做什么！

![](https://cdn.apifox.cn/markdown-img/202204/02/180808-djAC1I.png)

## 第七层：高级 Mock 自定义脚本 

还有？？？

这是最新的 Apifox 2.1.7 才有的强大功能。

新版本的高级 Mock 增加了一个“脚本”的 Tab，这个高级 Mock 自定义脚本是做什么用的呢？

![高级 Mock 自定义脚本](https://cdn.apifox.cn/markdown-img/202204/02/180824-nNye5v.png)

我们来考虑一个实际的案例。我有一个“查询宠物列表”的 GET 接口，它的请求参数是 page 和 pageSize，取值是 6 和 10，含义就是我要查宠物列表的第 6 页，每页限定 10 条记录。这是个很常见的翻页场景。

![我想要的](https://cdn.apifox.cn/markdown-img/202204/02/180843-E9riQy.png)

返回数据首先是一个数组，每一条是我查出来的这一页的一个宠物。下面还有一个 page 和 total，也就是当前页码和总计多少条记录。请求一下，返回的 Mock 数据就是一系列的宠物信息。

到下面的 page 字段，出现问题了：我请求的明明请求的是第 6 页的数据，你给我返回 page 是第 10 页算什么意思。

![我得到的](https://cdn.apifox.cn/markdown-img/202204/02/180902-V52Gqh.png)

再翻翻页，新的问题又出现了：刚才还是总共 25 页呢，我一翻页就变成总共 40 页了？？？而且第 10 页的下一页是 22 页？

![翻到下一页](https://cdn.apifox.cn/markdown-img/202204/02/180915-k26EmC.png)

我希望 Mock 出来的数据是什么样的呢？应该是我请求的是第几页，返回来的数据就是第几页；然后总页数应该是固定的，不会因为我翻前翻后就变。 

这时候我们就需要高级 Mock 的自定义脚本了。

在自定义脚本界面的右侧有一段示例代码，我们仔细读一下。

![](https://cdn.apifox.cn/markdown-img/202204/02/180930-DQpxk1.png)

1. 通过 `fox.mockResponse.json()` 获取系统自动生成的 JSON 数据，赋值给变量 responseJson。
2. 通过 `fox.mockRequest.getParam('page')` 获取实际请求参数 page，赋值给变量 responseJson 里的 page 字段。
3. 把 responseJson 的 total 字段重写为 120。
4. 通过 `fox.mockResponse.setBody(responseJson)` 把修改后的变量 responseJson 设置到的 mockResponse 里面，这样就修改了系统返回的 JSON 数据。

这样，我请求的是第几页，返回的就也是对应的第几页，然后总页数是保持 12 不变（120 除以每页 10 个）。

![](https://cdn.apifox.cn/markdown-img/202204/02/180957-MtpRHp.png)

这个自定义脚本就可以做很多事情了，比如我需要根据用户的性别是男是女 Mock 出返回的不同头像；或者先 Mock 出出生日期，然后用出生日期拼装成对应的身份证号等等，可以让我们 Mock 出来的数据彼此吻合。

自定义脚本可以操作的对象就是这个 `fox.mockRequest` 和 `fox.mockResponse`，可以获取请求参数、Header、Cookie，修改响应 Body、HTTP 状态码等，甚至响应的延时都可以自定义。

你就说牛不牛吧！

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/02/181015-nEWaNn.png" width="300px" />

## 赶紧去下载吧

Apifox Mock 功能的七层天梯，打完收功。

如果你是个前端，并且读到了这里，我觉得你应该鼓一下掌。

Apifox 的 Mock 功能完全值得你点一下**阅读原文**然后去下载。其他的 API 和 Mock 工具你全都可以扔掉了。

记得要下载`Apifox`桌面版使用，WEB 版目前还不支持 Mock 功能。

最后提醒一下，Mock 只是 Apifox 的功能中的一小部分。**Apifox = Postman + Swagger + Mock + Jmeter**，它的功能远不止这篇文章里的这些。

<img alt="表情包" src="https://cdn.apifox.cn/markdown-img/202204/02/181031-oipCFc.png" width="300px" />
