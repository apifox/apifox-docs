# 注释规范说明
## 注释规范

### Javadoc（Java）

-   [wiki](https://en.wikipedia.org/wiki/Javadoc)
-   [oracle](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html)
-   [baike](https://baike.baidu.com/item/javadoc)

### KDoc（Kotlin）

-   [kotlin-doc](https://kotlinlang.org/docs/reference/kotlin-doc.html)

### ScalaDoc（Scala）

-   [scaladoc](https://docs.scala-lang.org/style/scaladoc.html)


### Java 注释 Demo

```

/**
 * 分类名称
 * 分类备注/描述
 *
 * @module 归属项目
 */
@RestController
@RequestMapping(value = "/pathOfCtrl")
public class MockCtrl {

    /**
    * api名称
    * api描述
    * @param param1 参数1的名称或描述
    * @param param2 可以用`@link`来表示当前参数的取值是某个枚举{@link some.enum.or.constant.class}
    * @param param3 当目标枚举字段与当前字段名不一致,额外指定{@link some.enum.or.constant.class#property1}
    * @return 响应描述
    */
    @RequestMapping(value = "/pathOfApi1")
    public Result methodName1(long param1,
                      @RequestParam String param2,
                      @RequestParam(required = false, defaultValue = "defaultValueOfParam3") String param3){
        ...
    }


    /**
    * 默认使用`application/x-www-form-urlencoded`,
    * 对于`@RequestBody`将使用`application/json`
    * 可以用注解`@Deprecated`来表示api废弃
    * 也可以用注释`@deprecated`
    *
    * @deprecated 改用{@link #methodName3(String)}
    */
    @Deprecated
    @RequestMapping(value = "/pathOfApi2")
    public Result methodName2(@RequestBody MockDtoOrVo jsonModel){
        ...
    }

    /**
    * 所有注释或者参数描述中都可以使用`@link`来引用另一个API
    * 例如:
    * 请先访问{@link #methodName4(String)}

    * 也可以使用`@see`来引用另一个API
    *
    * @param param1 参数1的名称或描述 可以从{@link #methodName5(String)}中获得
    * @see #methodName6(String)
    * @deprecated 改用{@link #methodName7(String)}
    */
    @Deprecated
    @RequestMapping(value = "/pathOfApi3")
    public Result methodName3(long param1){
        ...
    }

    ...
}
```

### Model(DTO/VO) Demo

```
public class MockDtoOrVo {

    /**
     * 字段注释
     */
    private Long field1;

    private Double field2;//注释也可以写在这

    /**
     * 使用@see来说明当前字段的取值是某个枚举
     * @see some.enum.or.constant.class
     */
    private int field3;

    /**
     * 当目标枚举字段与当前字段名不一致,额外指定
     * @see some.enum.or.constant.class#property1
     */
    private int field4;

    /**
     * 可以用注解`@Deprecated`来表示字段被废弃
     * 也可以用注释`@deprecated`
     * @deprecated It's a secret
     */
    @Deprecated
    private int field5;

    /**
     * 如果使用javax.validation的话
     * 可以使用@NotBlank/@NotNull表示字段必须
     */
    @NotBlank
    @NotNull
    private String field6;

    ...
}
```



## 支持的规则

|     规则的key | 规则目标(上下文it) | 版本 | 规则描述 |
| --- | --- | --- | --- |
|     [api.name](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#api-name) | method | v1.4.1+ | 设置api的名称 |
|     [api.tags](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#api-tag) | method | v0.7.5+ | 标记接口tag |
|     [api.status](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#api-status) | method | v0.8.0+ | 标记接口status(应返回done/undone) |
|     [class.is.ctrl](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#class-is-ctrl) | method | v2.0.8+ | 允许导出指定类中的`api` |
|     [class.prefix.path](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#class-prefix-path) | class | v1.3.0+ | 设置API请求前缀 |
|     [constant.field.ignore](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#constant-field-ignore) | field | v1.3.8+ | 忽略常量字段 |
|     [enum.use.custom](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#enum-use-custom) | class | v2.4.1+ | 用于设置使用`@see`枚举类型时的默认取值字段, 优先级高于[enum.use.by.type](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#enum-use-by-type) |
|     [enum.use.by.type](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#enum-use-by-type) | class | v2.4.1+ | 用于设置使用`@see`枚举类型时的默认使用类型一致的字段, 优先级低于[enum.use.custom](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#enum-use-custom) |
|     [enum.use.ordinal](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#enum-use-ordinal) | class | v2.2.1+ | 用于设置使用`@see`枚举类型时的默认使用`ordinal`作为取值 |
|     [enum.use.name](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#enum-use-name) | class | v2.2.1+ | 用于设置使用`@see`枚举类型时的默认使用`name`作为取值 |
|     [field.default.value](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#field-default-value) | \- | v1.7.1+ | 用以设置字段的默认值 |
|     [field.example](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#field-example) | \- | v1.9.3+ | 用以设置字段的示例值 |
| ☆[field.description](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#field-description) | field | v0.7.2+ | 字段的额外注释 |
|     [field.ignore](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#field-ignore) | field | v2.0.0+ | 忽略字段(设置某些字段不出现在json中,或不需要请求时给出) |
| ☆[field.mock](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#field-mock) | field | v1.4.2+ | 生成`yapi`mock信息 |
|     [field.mock.resolveProperty](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#field-mock) | \- | v1.4.2+ | 用以开关是否解析`field.mock`规则结果中的占位符 |
|     [field.name](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#field-name) | field | v0.7.2+ | 设置输出的字段名(用于json中字段名与类中字段名不一致) |
|     [field.required](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#field-required) | field | v0.7.3+ | 字段是否为必须(即不可为空) |
|     [folder.name](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#folder-name) | method | v1.9.2+ | 设置api所属文件夹 |
|     [ignore](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#ignore) | class/method | v0.7.2+ | 忽略API |
| ☆[json.rule.convert](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#json-rule-convert) | \- | v0.7.2+ | 用于设置某些类型转换为其他类型处理, 通常用于使用了Spring的自定义类型转换器的情况 |
|     [json.rule.enum.convert](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#json-rule-enum-convert) | class | v1.2.0+ | 用于枚举类型的特殊转换 |
|     [~json.rule.field.ignore~](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#json-rule-field-ignore) | field | v0.7.2+ | 忽略字段(设置某些字段不出现在json中,或不需要请求时给出) 已废弃, 使用[field.ignore](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#field-ignore)代替 |
|     [~json.rule.field.name~](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#json-rule-field-name) | field | v0.7.2+ | 设置输出的字段名(用于json中字段名与类中字段名不一致) |
|     [mdoc.class.filter](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#mdoc-class-filter) | class | v0.9.5+ | 选择哪些类可以导出方法文档(rpc) |
|     [mdoc.method.path](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#mdoc-method-path) | method | v0.9.5+ | 设置方法文档(rpc)的路径 |
|     [mdoc.method.http.method](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#mdoc-method-http-method) | method | v0.9.5+ | 设置方法文档(rpc)HTTP请求方式 |
|     [method.additional.header](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#method-additional-header) | method | v1.3.0+ | API需要额外的header |
|  |  |  | {name: "header name",value: "",desc: "",required:false, example:""} |
|     [method.additional.param](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#method-additional-param) | method | v1.3.0+ | API需要额外的参数 |
|  |  |  | {name: "param name",value: "defaultValue",desc: "",required:false} |
|     [method.content.type](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#method-content-type) | \- | v1.9.7+ | 用以设置API请求的content-type |
|     [method.default.http.method](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#method-default-http-method) | method | v1.4.2+ | 设置默认的api的HttpMethod |
|     [method.description](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#method-description) | method | v0.7.2+ | 方法(api)的额外注释 |
| ☆[method.return.main](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#method-return-main) | method | v1.3.8+ | 设置返回值的核心主体 |
| ☆[method.return](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#method-return) | method | v1.6.1+ | 设置返回值的类型 |
|     [module](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#module) | class | v0.7.2+ | 为api分组 |
|     [param.default-value](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#param-default-value) | arg | v1.3.0+ | API参数的默认值 |
|     [param.example](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#param-example) | \- | v1.9.3+ | 用以设置参数的示例值 |
|     [param.description](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#param-description) | arg | v1.3.0+ | 参数的额外注释 |
|     [param.type](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#param-type) | arg | v2.0.0+ | 用于设置API参数在HTTP请求中的类型 |
|     [param.ignore](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#param-ignore) | arg | v1.3.0+ | 忽略API参数 |
|     [param.required](https://www.apifox.cn/help/ide-plugin/idea-plugin/setting-rule/#param-required) | arg | v0.7.3+ | API参数是否为必须(即不可为空) |

___

## 支持的简单配置

_简单配置无上下文_

|     规则的key | 版本 | 配置类型 | 规则描述 | 示例 |
| --- | --- | --- | --- | --- |
|     dev | v2.2.1+ | bool | 启动开发模式,打印更详细的日志 | dev=true |
|     max.deep | v2.3.6+ | int | 解析`json`时最大深度,默认6 | max.deep=8 |
|     max.elements | v2.3.6+ | int | 解析`json`时最大字段数,默认256 | max.elements=512 |
|     json.cache.disable | v2.1.0+ | bool | 禁用`json`解析缓存 | json.cache.disable=true |
|     http.timeOut | v2.1.0+ | int | `http`请求的超时时间(s),优先级高于`setting` | http.timeOut=5 |
|     auto.format.url | v2.1.0+ | bool | 导入`yapi`时是否格式化`url`,确保`url`以`/`开始，且将\[a-zA-Z0-9-/\_:.{}?=!\]之外的字符替换为`/` | auto.format.url=false |
|     field.mock.resolveProperty | v2.1.0+ | bool | 是否处理`yapi` `mock`信息中的占位符`${xxx}` | field.mock.resolveProperty=true |
|     api.tag.delimiter | v2.1.0+ | string | `yapi` `tag`的分割符, 默认为`,` | api.tag.delimiter=,# |

___

## 支持的回调

_部分回调方法中可能没有`it`, 但可能会有附加的上下文供使用_

|     规则的key | 规则目标(上下文it) | 附加上下文 | 版本 | 规则描述 |
| --- | --- | --- | --- | --- |
|     [api.class.parse.before](https://easyyapi.com/setting/events/api_class_parse_before.html) | class | 无 | v2.2.8+ | 解析`api`前回调 |
|     [api.class.parse.after](https://easyyapi.com/setting/events/api_class_parse_after.html) | class | 无 | v2.2.8+ | 解析`api`后回调 |
|     [api.method.parse.before](https://easyyapi.com/setting/events/api_method_parse_before.html) | method | 无 | v2.2.8+ | 解析`api`方法前回调 |
|     [api.method.parse.after](https://easyyapi.com/setting/events/api_method_parse_after.html) | method | 无 | v2.2.8+ | 解析`api`方法后回调 |
|     [api.param.parse.before](https://easyyapi.com/setting/events/api_param_parse_before.html) | param | 无 | v2.2.8+ | 解析`api`参数前回调 |
|     [api.param.parse.after](https://easyyapi.com/setting/events/api_param_parse_after.html) | param | 无 | v2.2.8+ | 解析`api`参数后回调 |
|     [export.after](https://easyyapi.com/setting/rules/export_after.html) | method | [api](https://easyyapi.com/setting/tools/api.html) | v2.0.1+ | 每个api导出完成后回调 |
|     [http.call.before](https://easyyapi.com/setting/rules/http_call_before.html) | 无 | [request](https://easyyapi.com/setting/tools/httpClient.html#request) | v1.9.0+ | http请求前回调 |
|     [http.call.after](https://easyyapi.com/setting/rules/http_call_after.html) | 无 | [request](https://easyyapi.com/setting/tools/httpClient.html#request), [response](https://easyyapi.com/setting/tools/httpClient.html#response) | v1.9.0+ | http请求后回调 |
|     [json.class.parse.before](https://easyyapi.com/setting/events/json_class_parse_before.html) | class | 无 | v2.2.8+ | 解析类型前回调 |
|     [json.class.parse.after](https://easyyapi.com/setting/events/json_class_parse_after.html) | class | 无 | v2.2.8+ | 解析类型后回调 |
|     [json.field.parse.before](https://easyyapi.com/setting/events/json_field_parse_before.html) | field | 无 | v2.2.8+ | 解析类型字段前回调 |
|     [json.field.parse.after](https://easyyapi.com/setting/events/json_field_parse_after.html) | field | 无 | v2.2.8+ | 解析类型字段后回调 |
|     [json.method.parse.before](https://easyyapi.com/setting/events/json_method_parse_before.html) | method | 无 | v2.2.8+ | 解析类型方法 (getter|setter)前回调 |
|     [json.method.parse.after](https://easyyapi.com/setting/events/json_method_parse_after.html) | method | 无 | v2.2.8+ | 解析类型方法(getter|setter)后回调 |
|     [yapi.export.before](https://easyyapi.com/setting/events/yapi_export_before.html) | 无 | 无 | v2.0.1+ | 导出到yapi之前回调 |

___

_**NOTES: [本地文件配置](https://easyyapi.com/setting/local-file-config.html)**_

___

## 规则语法

## 简单规则

-   \# 读取注释上的tag
    
    -   如 `#fake`对应取的注释如下:
        
        ```
        /**
        * @fake
        */
        ```
        
-   @ 读取注解
    
    -   @xxx 读取方法或字段上的注解,如`@org.springframework.web.bind.annotation.RequestMapping`
        
        ```
        @RequestMapping("path")
        public class FakeClass{...}
        ```
        
    -   @xxx#yyy 读取方法或字段上的注解中的attr值,如`@org.springframework.web.bind.annotation.RequestMapping#value`
        
        ```
        @RequestMapping(value = "path")
        public class FakeClass{...}
        ```
        
-   字面量
    
    -   boolean如: `api.open=true`
    -   string如: `api.status=done`

## 高级脚本规则

-   由于`JDK11`后`js`引擎可能缺失, 故推荐使用`groovy`作为首选
-   `groovy`规则为 `groovy:groovyScript`
-   `js`规则为 `js:jsScript`

## 导出效果

* 列表页

| 接口名称 | 接口路径 | 接口分类 | 状态 | tag |
| ---- | ---- | ---- | --- | --- |
| Mock String | /mock/string | Mock Apis | 已完成 | swagger |
| test |

* 详情页

| **基本信息** |
| ---- |
| 接口名称： Mock String               创 建 人：  admin |
| 状  态： 已完成                 更新时间：  2019-12-07 22:31:28 |
| Tag ：    swagger, test |
| 接口路径： GET /mock/string |
| Mock地址： http://127.0.0.1:3000/mock/172/mock/string |

***

#### api.tag.delimiter

* 用于分割tags, 默认tag的分隔符是`,\n`
    * 如规则得到的`tag`是`a,b`,则会被切割为[a,b]
    * 如希望`a,b`视为一个规则,可以设置`api.tag.delimiter=\n`,则不再对`,`进行切割
    * 如希望将`a|b|c`切割为[a,b,c],可以设置`api.tag.delimiter=|\n`
    * 如希望将`a,b|c,d`切割为[a,b,c,d],可以设置`api.tag.delimiter=|,\n`

