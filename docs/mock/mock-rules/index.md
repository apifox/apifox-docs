# Mock 语法

Apifox Mock 语法完全兼容 [Mock.js](http://mockjs.com/)（数据占位符方式），并扩展了一些 Mock.js 没有的语法（如国内手机号 @phone）。

:::tip 注意

如现有 Mock 语法无法满足需求，建议使用 [正则表达式 @regexp](#regexp) 来实现灵活的定制。正则表达式基本能满足各种特殊场景的需求。

:::

## 基本写法

| 写法              | 说明                                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| 以`@`起始的字符串 | 调用 Mock 语法规则生成对应的数据。<br />如生成的数据类型和定义的数据类型不一致，则会自动转换。 |
| 非`@`起始的字符串 | 数据类型为`string`时，原样输出。<br />其他数据类型，会将字符串自动转换到对应的数据类型。       |
| 特殊字符：null    | 数据类型允许为`null` 时，输出`null`。<br />否则自动转换，如数据类型为`string`，输出`"null"`。  |
| 特殊字符：true    | 数据类型为`boolean` 时，输出`true`。<br />否则自动转换，如数据类型为`string`，输出`"true"。`   |
| 特殊字符：false   | 数据类型为`boolean` 时，输出`false`。<br />否则自动转换，如数据类型为`string`，输出`"false"。` |

**自动转换** 是使用 javascript 语言默认数据转换方法进行转换。

## Mock 语法

### 基础类型

| 分类   | 规则                           | 示例                    | 示例结果                                                          |
| ------ | ------------------------------ | ----------------------- | ----------------------------------------------------------------- |
| 布尔值 | @boolean                       | @boolean                | false<br />true<br />true                                         |
|        | @boolean( min, max, current )  | @boolean(1, 9, true)    | false<br />false                                                  |
| 自然数 | @natural                       | @natural                | 5748399088025322<br />3295768519606992<br />6595528165924058      |
|        | @natural( min )                | @natural(10000)         | 5492366038361662<br />2061541478134547                            |
|        | @natural( min, max )           | @natural(60, 100)       | 99<br />66                                                        |
| 整数   | @integer                       | @integer                | -7585865973372456<br />3913822053899244<br />5164580957595932     |
|        | @integer( min )                | @integer(10000)         | 7304069372231661<br />6538343333105173                            |
|        | @integer( min, max )           | @integer(60, 100)       | 99<br />66                                                        |
| 浮点数 | @float                         | @float                  | 4791951330736181<br />3310225074798816.5<br />-2562681950443352.5 |
|        | @float( min )                  | @float(0)               | 460523639430244.3<br />5146972509822378                           |
|        | @float( min, max )             | @float(60, 100)         | 91.85250094787806<br />66.1232254588188                           |
|        | @float( min, max, dmin )       | @float(60, 100, 3)      | 66.4375611<br />78.50157676437885                                 |
|        | @float( min, max, dmin, dmax ) | @float(60, 100, 3, 5)   | 91.5811<br />91.27216                                             |
| 单字符 | @character                     |                         | "z"<br />"%"<br />"V"                                             |
|        | @character( pool )             | @character('lower')     | "x"                                                               |
|        |                                | @character('upper')     | "R"                                                               |
|        |                                | @character('number')    | "6"                                                               |
|        |                                | @character('symbol')    | "#"                                                               |
|        | @character( pool )             | @character('aeiou')     | "i" "o"                                                           |
| 字符串 | @string                        | @string                 | "2u&x" "rUlmf" "5qfJp1"                                           |
|        | @string( length )              | @string(5)              | "88yC6" "3^8VT"                                                   |
|        | @string( pool, length )        | @string('lower', 5)     | "xlmes"                                                           |
|        |                                | @string('upper', 5)     | "SETVW"                                                           |
|        |                                | @string('number', 5)    | "12751"                                                           |
|        |                                | @string('symbol', 5)    | "%&(#\*"                                                          |
|        |                                | @string('aeiou', 5)     | "eeaeu"                                                           |
|        | @string( min, max )            | @string(7, 10)          | "ZIuenM8" "DVu%]kEqC"                                             |
|        | @string( pool, min, max )      | @string('lower', 1, 3)  | "m"                                                               |
|        |                                | @string('upper', 1, 3)  | "XXA"                                                             |
|        |                                | @string('number', 1, 3) | "8"                                                               |
|        |                                | @string('symbol', 1, 3) | "["                                                               |
|        |                                | @string('aeiou', 1, 3)  | "a"                                                               |

<a id="regexp"></a>

### 正则表达式

| 规则              | 示例                                              | 示例结果           |
| ----------------- | ------------------------------------------------- | ------------------ |
| @regexp( regexp ) | @regexp(/\d+/)                                    | "36436"            |
|                   | @regexp(/\d{3,5}/)                                | "343"              |
|                   | @regexp(/^[a-zA-Z][a-za-z0-9_\-\.]+@gmail\.com$/) | "ifa3dt@gmail.com" |

::: tip 注意

- Apifox 版本号大于等于 `1.0.12` 才支持正则表达式。
- regexp 参数必须以 `/` 起始和结尾。
- 正则表达式参考文档：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

:::

### 日期/时间

| 分类     | 规则                 | 示例                                  | 示例结果                  |
| -------- | -------------------- | ------------------------------------- | ------------------------- |
| 日期     | @date                | @date                                 | "2013-09-05"              |
|          | @date( format )      | @date('yyyy-MM-dd')                   | "1992-10-27"              |
|          |                      | @date('yy-MM-dd')                     | "04-01-30"                |
|          |                      | @date('y-MM-dd')                      | "90-07-29"                |
|          |                      | @date('y-M-d')                        | "71-6-4"                  |
|          |                      | @date('yyyy yy y MM M dd d')          | "1971 71 71 05 5 02 2"    |
| 时间     | @datetime            | @datetime                             | "1988-05-25 11:34:14"     |
|          | @datetime( format )  | @datetime('yyyy-MM-dd A HH:mm:ss')    | "1978-01-10 AM 03:59:54"  |
|          |                      | @datetime('yy-MM-dd a HH:mm:ss')      | "92-06-22 pm 12:45:54"    |
|          |                      | @datetime('y-MM-dd HH:mm:ss')         | "97-02-10 06:01:13"       |
|          |                      | @datetime('y-M-d H: m:s')             | "98-10-17 18:56:12"       |
| 当前时间 | @now                 | @now                                  |                           |
|          | @now( unit )         | @now('year')                          | "2020-01-01 00:00:00"     |
|          |                      | @now('month')                         | "2020-08-01 00:00:00"     |
|          |                      | @now('week')                          | "2020-08-09 00:00:00"     |
|          |                      | @now('day')                           | "2020-08-11 00:00:00"     |
|          |                      | @now('hour')                          | "2020-08-11 15:00:00"     |
|          |                      | @now('minute')                        | "2020-08-11 15:24:00"     |
|          |                      | @now('second')                        | "2020-08-11 15:24:02"     |
|          | @now( format )       | @now('yyyy-MM-dd HH:mm:ss SS')        | "2020-08-11 15:24:02 761" |
|          | @now( unit, format ) | @now('day', 'yyyy-MM-dd HH:mm:ss SS') | "2020-08-11 00:00:00 000" |
| 时间戳   | @timestamp( format ) | @timestamp('s')                       | "1662605353"              |
|          |                      | @timestamp('ms')                      | "1662605408838"           |

### 图片

| 分类     | 规则                                                 | 示例                                             | 示例结果                                                |
| -------- | ---------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| 图片 URL | @image                                               | @image                                           | "http://dummyimage.com/300x250"                         |
|          | @image( size )                                       | @image('200x100')                                | "http://dummyimage.com/200x100"                         |
|          | @image( size, background )                           | @image('200x100', '#FF6600')                     | "http://dummyimage.com/200x100/FF6600"                  |
|          | @image( size, background, text )                     | @image('200x100', '#4A7BF7', 'Hello')            | "http://dummyimage.com/200x100/4A7BF7&text=Hello"       |
|          | @image( size, background, foreground, text )         | @image('200x100', '#50B347', '#FFF', 'Mock.js')  | "http://dummyimage.com/200x100/50B347/FFF&text=Mock.js" |
|          | @image( size, background, foreground, format, text ) | @image('200x100', '#894FC4', '#FFF', 'png', '!') | "http://dummyimage.com/200x100/894FC4/FFF.png&text=!"   |
| 图片数据 | @dataImage                                           | @dataImage                                       |                                                         |
|          | @dataImage( size )                                   | @dataImage('200x100')                            |                                                         |
|          | @dataImage( size, text )                             | @dataImage('200x100', 'Hello Mock.js!')          |                                                         |

### 颜色

| 规则   | 示例   | 示例结果                    |
| ------ | ------ | --------------------------- |
| @color | @color | "#79aaf2"                   |
| @hex   | @hex   | "#79f2d0"                   |
| @rgb   | @rgb   | "rgb(121, 210, 242)"        |
| @rgba  | @rgba  | "rgba(121, 242, 167, 0.50)" |
| @hsl   | @hsl   | "hsl(228, 82, 71)"          |

### 中文文本

| 分类 | 规则                    | 示例                                | 示例结果                                                                                                                                                                                           |
| ---- | ----------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 段落 | @cparagraph             | @cparagraph                         | "量值这专平约称结半米化目管结北问。次便为流据由经改候究历学始影增具完。流极什其转青次各红团地真产观。争置着安眼头近效例温持完始音加照族。向素海究果存处划化复阶商手。心便近型无院些其认性几步性。" |
|      | @cparagraph( len )      | @cparagraph(2)                      | "表验目给有新状段步表她位决华响。心什采最结小务受装通米知度是效近。"                                                                                                                               |
|      | @cparagraph( min, max ) | @cparagraph(1, 3)                   | "东例例候专干类济带史还二任头。他千统南常公历快几要只证按规提合中。边也心近号其变代白飞小总红易。"                                                                                                 |
| 句子 | @csentence              | @csentence                          | "会己风感本员主见它真划生史派达原。"                                                                                                                                                               |
|      | @csentence( len )       | @csentence(5)                       | "化而知只可。"                                                                                                                                                                                     |
|      | @csentence( min, max )  | @csentence(3, 5)                    | "称育满。"                                                                                                                                                                                         |
| 单词 | @cword                  | @cword                              | "光"                                                                                                                                                                                               |
|      | @cword( pool )          | @cword('零一二三四五六七八九十')    | "三"                                                                                                                                                                                               |
|      | @cword( len )           | @cword(5)                           | "目法小"                                                                                                                                                                                           |
|      | @cword( pool, length )  | @cword('零一二三四五六七八九十', 3) | "十一九"                                                                                                                                                                                           |
|      | @cword( min, max )      | @cword(3, 5)                        | "除文更代"                                                                                                                                                                                         |
| 标题 | @ctitle                 | @ctitle                             | "清照过做问"                                                                                                                                                                                       |
|      | @ctitle( len )          | @ctitle(5)                          | "系做组平想"                                                                                                                                                                                       |
|      | @ctitle( min, max )     | @ctitle(3, 5)                       | "热群越半"                                                                                                                                                                                         |

### 中文姓名

| 规则    | 示例    | 示例结果 |
| ------- | ------- | -------- |
| @cfirst | @cfirst | "赵"     |
| @clast  | @clast  | "秀英"   |
| @cname  | @cname  | "乔强"   |

### Web 相关

| 规则             | 示例           | 示例结果                    |
| ---------------- | -------------- | --------------------------- |
| @email           | @email         | "s.piqapshn@qiepsdrrm.jm"   |
| @ip              | @ip            | "99.34.19.184"              |
| @url             | @url           | "gopher://yux.ad/sxte"      |
| @url( protocol ) | @url('http')   | "http://psrvbes.mobi/cxyvc" |
| @domain          | @domain        | "hrwt.pt"                   |
| @domain( tld )   | @domain('com') | "fdsfl.com"                 |
| @protocol        | @protocol      | "ftp"                       |
| @tld             | @tld           | "ga"                        |

### 地址相关

| 分类        | 规则              | 示例          | 示例结果               |
| ----------- | ----------------- | ------------- | ---------------------- |
| 区域        | @region           | @region       | "华北"                 |
| 省          | @province         | @province     | "陕西省"               |
| 市          | @city             | @city         | "淮北市"               |
| 市 (含省)   | @city( prefix )   | @city(true)   | "广东省 肇庆市"        |
| 区          | @county           | @county       | "东昌区"               |
| 区 (含省市) | @county( prefix ) | @county(true) | "湖南省 怀化市 溆浦县" |
| 邮编        | @zip              | @zip          | "843028"               |

### 其他

| 分类       | 规则                | 示例                                | 示例结果                               |
| ---------- | ------------------- | ----------------------------------- | -------------------------------------- |
| GUID       | @guid               | @guid                               | "D3f4c7A7-6c6B-1BEA-ff1b-DBfde6Bc1E17" |
| 数字 ID    | @id                 | @id                                 | "450000197209231877"                   |
| 自增 ID    | @increment          | @increment                          | "1"<br />"2"<br />"3"                  |
|            | @increment( step )  | @increment(100)                     | "101"<br />"201"<br />"301"            |
| 首字母大写 | @capitalize( word ) | @capitalize('hello')                | "Hello"                                |
| 全大写     | @upper( str )       | @upper('hello')                     | "HELLO"                                |
| 全小写     | @lower( str )       | @lower('HELLO')                     | "hello"                                |
| 多选一     | @pick( arr )        | @pick(["a", "e", "i", "o", "u"])    | "e"                                    |
| 乱序       | @shuffle( arr )     | @shuffle(["a", "e", "i", "o", "u"]) | ["e","i","o","a","u"]                  |

### 英文文本

| 分类 | 规则                   | 示例             | 示例结果                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---- | ---------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 段落 | @paragraph             | @paragraph       | "Befq rkjnyqbc wrflqkzjly tlcdmjm rqpnup ipa fwxkipy bcew nbbnjfrc phroqxn fdhbqdbb cfoute icvcesoar qaetf. Rzurmrdgp wxktybadq byob oqspsewp ljxdrmhnu dwrrqyt mjwqxvrj crd nqcl hudow fokknwhqx aylfpdibdr. Qjwddj seudwxsw bugqajbik johcd bbdslyb natgh vwhbem evayqr csr ftol bjduobs cfiqy uujjldmdgo bsqq. Pttt kdwvhclmn wycb jylskicq jfleydoug gtvlqibx rekmy hmqssqiij fdsmfcs sqmktug cxqun qpecltkv dpdpiqejt lnk." |
|      | @paragraph( len )      | @paragraph(2)    | "Qjcneih hxqtyeyhx crdori puxzq sukv mmoix gyoecfk nqwmvqlg ltvsdpshy qremm awlbgtskx qqzun wppoiasprw ldvlhgh wcyv odotfnggm bgqgcrpwu. Cjyohmm vyrj ehtnlgbg opj budsggflof nilo hlxp wwatulc hunwohq gglluimn mqht audi aepicfkv etpdld pmfuo iotsdbladi shvxfes."                                                                                                                                                            |
|      | @paragraph( min, max ) | @paragraph(1, 3) | "Mgoyprc hmnscp mrhggsufd jxjpo ggbnxddtqv epdii reuwqs dtyfjmc ppq igcji muudseokx uigz oivhmvbdu csgjfslwc yhu. Mjvln pydscchcrx nnel nxmw edyi ybt kuffpq sjdocykn pxlzem jrjlm pmvck culvj xecywqm oovofkqfwu."                                                                                                                                                                                                              |
| 句子 | @sentence              | @sentence        | "Kgjo tomuhfu phqjx dhmclyl gyyrqpk hgzzrer vjlo cqcr pvkwsogqf ejngmhyuk nsod ouldhpu llkpctcnxs ubzkfu uepyxbkx kopy sdsw."                                                                                                                                                                                                                                                                                                    |
|      | @sentence( len )       | @sentence(5)     | "Ktlison axxvc fphbrrn txzoj jupzyrnl."                                                                                                                                                                                                                                                                                                                                                                                          |
|      | @sentence( min, max )  | @sentence(3, 5)  | "Jzlop lqmkuu cjnrkhge xofrywpe."                                                                                                                                                                                                                                                                                                                                                                                                |
| 单词 | @word                  | @word            | "fers"                                                                                                                                                                                                                                                                                                                                                                                                                           |
|      | @word( len )           | @word(5)         | "qtpjf"                                                                                                                                                                                                                                                                                                                                                                                                                          |
|      | @word( min, max )      | @word(3, 5)      | "payxj"                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 标题 | @title                 | @title           | "Rvugsxd Jytpw Gqrcffglc Qjt"                                                                                                                                                                                                                                                                                                                                                                                                    |
|      | @title( len )          | @title(5)        | "Fwbh Udrrncbdpo Xwdqhpu Zvlxyn Fvfnu"                                                                                                                                                                                                                                                                                                                                                                                           |
|      | @title( min, max )     | @title(3, 5)     | "Kwnim Ekvocyml Onxnh"                                                                                                                                                                                                                                                                                                                                                                                                           |

### 英文姓名

| 规则   | 示例   | 示例结果           | 说明 |
| ------ | ------ | ------------------ | ---- |
| @first | @first | "Michelle"         |      |
| @last  | @last  | "Lewis"            |      |
| @name  | @name  | "Charles Williams" |      |
