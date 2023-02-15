# 框架支持
-   基于性能考虑, 内置推荐配置并不会覆盖所有框架的所有功能
-   如需增加对指定框架的支持, 参考配置

## Spring Boot

**在推荐配置中有很多spring-boot相关的配置**

-   处理`HttpEntity`/`RequestEntity`/`ResponseEntity`

```properties
#resolve HttpEntity/RequestEntity/ResponseEntity
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object
###set resolveProperty = true
```

-   加载spring-boot相关配置:

```properties
#Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml
```

-   默认使用spring-boot配置中的`server.servlet.context-path`

```properties
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```


## Spring Boot Webflux

**在推荐配置中有部分[springboot-webflux](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux)相关的配置**

```properties
#resolve Mono/Flux
###set resolveProperty = false
json.rule.convert[#regex:reactor.core.publisher.Mono<(.*?)>]=${1}
json.rule.convert[#regex:reactor.core.publisher.Mono]=java.lang.Object
json.rule.convert[#regex:reactor.core.publisher.Flux<(.*?)>]=java.util.List<${1}>
json.rule.convert[#regex:reactor.core.publisher.Flux]=java.util.List<java.lang.Object>
###set resolveProperty = true
```

## Swagger

默认推荐配置中不包含`swagger`的支持

如果需要支持[swagger](https://swagger.io),可自行按需增加如下配置

#### 基础配置

```properties
# swagger

# ApiParam
param.doc=@io.swagger.annotations.ApiParam#value
param.default.value=@io.swagger.annotations.ApiParam#defaultValue
param.required=@io.swagger.annotations.ApiParam#required
param.ignore=@io.swagger.annotations.ApiParam#hidden

# Api
class.doc=@io.swagger.annotations.Api#value
class.doc=@io.swagger.annotations.Api#tags
ignore=@io.swagger.annotations.Api#hidden

# ApiModel
class.doc=@io.swagger.annotations.ApiModel#value
class.doc=@io.swagger.annotations.ApiModel#description

# ApiModelProperty
json.rule.field.name=@io.swagger.annotations.ApiModelProperty#name
field.ignore=@io.swagger.annotations.ApiModelProperty#hidden
field.doc=@io.swagger.annotations.ApiModelProperty#value
field.doc=@io.swagger.annotations.ApiModelProperty#notes
field.required=@io.swagger.annotations.ApiModelProperty#required

# ApiOperation
method.doc=@io.swagger.annotations.ApiOperation#value
api.tag=@io.swagger.annotations.ApiOperation#tags
```

_**快速配置**_

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/swagger.config
```

### 增强配置
可根据实际情况修改

````properties

# swagger-advanced

# resolve the parameters from ApiImplicitParam
resolve_api_implicit_param=```
    def desc = map.value
    def allowableValues = map.allowableValues
    if(tool.notNullOrBlank(allowableValues)){
        desc = desc + "\n允许的值:" + allowableValues
    }

    def paramType = map.paramType ?: "query"
    def required = map.required?:true
    if(paramType==""||paramType=="query"){
        api.setParam(map.name,map.defaultValue,required,desc)
    }else if(paramType=="form"){
        api.setFormParam(map.name,map.defaultValue,required,desc)
    }else if(paramType=="path"){
        api.setPathParam(map.name,map.defaultValue,desc)
    }else if(paramType=="header"){
        api.setHeader(map.name,map.defaultValue,required,desc)
    }
```

# extract map from ApiImplicitParam
export.after[@io.swagger.annotations.ApiImplicitParam]=groovy:```
    def map = it.annMap("io.swagger.annotations.ApiImplicitParam")
    ${resolve_api_implicit_param}
```

# extract maps from ApiImplicitParams
export.after[@io.swagger.annotations.ApiImplicitParams]=groovy:```
    def maps = it.annMap("io.swagger.annotations.ApiImplicitParams")
    for(map in maps){
        ${resolve_api_implicit_param}
    }
```



# Resolve the response from `APIResponse` into the API description
resolve_api_response=```
    def desc = "\\n\\n***响应码***:"+map.code+"\\n\\n"
    desc += map.message+"\\n\\n"
    def response = map.response
    if(response!=null){
        def responseClass = helper.findClass(response)
        if(responseClass!=null){
            desc += "响应内容:\\n```json\\n" + responseClass.toJson(true) + "\\n```\\n"
        }
    }
    api.appendDesc(desc)
```


# Resolve `APIResponse` into the API description
export.after[@io.swagger.annotations.ApiResponse]=groovy:```
    def map = it.annMap("io.swagger.annotations.ApiResponse")
    ${resolve_api_response}
```

# Resolve `APIResponses` into the API description
export.after[@io.swagger.annotations.ApiResponses]=groovy:```
    def maps = it.annMap("io.swagger.annotations.ApiResponses")
    for(map in maps.value){
        ${resolve_api_response}
    }
```


# Resolve one `APIResponse` into the API description
export.after[@io.swagger.annotations.ApiResponse]=groovy:```
    def map = it.annMap("io.swagger.annotations.ApiResponse")

    api.setResponseCode(map.code?:200)
    api.appendResponseBodyDesc(map.message)
    def responseHeaders = map.responseHeaders
    if(responseHeaders!=null){
        for(responseHeader in responseHeaders) {
            api.setResponseHeader(responseHeader.name,"",true,responseHeader.description)
        }
    }
    def response = map.response
    if(response!=null){
        api.setResponseBodyClass(response)
    }
```

````

_**快速配置**_

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/swagger.advanced.config
```

## JAX-RS
插件支持`JAX-RS`协议

-   [quarkus](https://quarkus.io/)
-   [jersey](https://eclipse-ee4j.github.io/jersey/)

确认勾选:Preferences(Settings) > Other Settings > EasyApi > Support > jaxrs(quarkus | jersey)

### quarkus & jersey

![jaxrs](https://easyyapi.com/asset/jaxrs.png)

## javax.validation
在推荐配置中有部分javax.validation相关的简单配置

### 简单-不分组
-   默认选择的就是不分组模式`javax.validation`
-   可以在 Preferences(Settings) > Other Settings > EasyApi >Recommend 中检查是否有勾选`javax.validation`, 并移除勾选`javax.validation(grouped)`

### 简单-分组
-   默认选择的是不分组模式`javax.validation`
-   如果需要开启分组校验, 可以在 Preferences(Settings) > Other Settings > EasyApi >Recommend 中移除勾选`javax.validation`, 勾选`javax.validation(grouped)`

### 完全-不分组
需要对`javax.validation`完整的支持, 可自行增加如下配置

````
# rules for javax.validation

#Support for javax.validation annotations
param.required=@javax.validation.constraints.NotBlank
field.required=@javax.validation.constraints.NotBlank
param.required=@javax.validation.constraints.NotNull
field.required=@javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotEmpty
field.required=@javax.validation.constraints.NotEmpty

# define var
number_min=-9999
number_max=9999
float_dmin=2
java_integer_types=["java.lang.Integer","int","java.lang.Long","long","java.lang.Short","short","java.math.BigInteger"]
java_float_types=["java.lang.String","java.lang.Float","float","java.lang.Double","double","java.math.BigDecimal"]
# mock_integer_or_float=${java_integer_types}.contains(it.type().name())?"@integer":"@float"

# AssertTrue|AssertFalse
field.mock[@javax.validation.constraints.AssertFalse]=false
field.demo[@javax.validation.constraints.AssertFalse]=false
field.mock[@javax.validation.constraints.AssertTrue]=true
field.demo[@javax.validation.constraints.AssertTrue]=true

# DecimalMax+DecimalMin -mock
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.DecimalMin")+","+it.ann("javax.validation.constraints.DecimalMax")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.DecimalMin")+","+it.ann("javax.validation.constraints.DecimalMax")+",${float_dmin})"

# DecimalMax|DecimalMin  -mock
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,"+it.ann("javax.validation.constraints.DecimalMax")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.DecimalMin")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,"+it.ann("javax.validation.constraints.DecimalMax")+",${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.DecimalMin")+",${number_max},${float_dmin})"

# DecimalMax、DecimalMin  -advanced
field.advanced[@javax.validation.constraints.DecimalMax]=groovy:```
    def ann = it.annMap("javax.validation.constraints.DecimalMax")
    return [maximum:ann["value"],exclusiveMaximum:(ann["inclusive"]==false)]
```
field.advanced[@javax.validation.constraints.DecimalMin]=groovy:```
    def ann = it.annMap("javax.validation.constraints.DecimalMin")
    return [minimum:ann["value"],exclusiveMinimum:(ann["inclusive"]==false)]
```

# javax.validation.constraints.Digits

field.mock[groovy:it.hasAnn("javax.validation.constraints.Digits")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:```
    def max = "9".repeat(it.annValue("javax.validation.constraints.Digits","integer")).toInteger()
    return "@integer("+(-max)+","+max+")"
```
field.mock[groovy:it.hasAnn("javax.validation.constraints.Digits")&&${java_float_types}.contains(it.jsonType().name())]=groovy:```
    def max = ("9".repeat(it.annValue("javax.validation.constraints.Digits","integer"))+"."+"9".repeat(it.annValue("javax.validation.constraints.Digits","fraction"))).toDouble()
    return "@float("+(-max)+","+max+",0,"+it.ann("javax.validation.constraints.Digits","fraction")+")"
```

field.advanced[groovy:it.hasAnn("javax.validation.constraints.Digits")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:```
    def max = "9".repeat(it.annValue("javax.validation.constraints.Digits","integer")).toInteger()
    return [minimum:-max,maximum:max]
```
field.advanced[groovy:it.hasAnn("javax.validation.constraints.Digits")&&${java_float_types}.contains(it.jsonType().name())]=groovy:```
    def max = ("9".repeat(it.annValue("javax.validation.constraints.Digits","integer"))+"."+"9".repeat(it.annValue("javax.validation.constraints.Digits","fraction"))).toDouble()
    return [minimum:-max,maximum:max]
```


# javax.validation.constraints.Email
field.mock[@javax.validation.constraints.Email]=groovy:"@email"
field.advanced[@javax.validation.constraints.Email]={"format":"email"}

# Max+Min
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&it.hasAnn("javax.validation.constraints.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.Min")+","+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&it.hasAnn("javax.validation.constraints.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.Min")+","+it.ann("javax.validation.constraints.Max")+",${float_dmin})"

# Max|Min
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,"+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.Min")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,"+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.Min")+",${number_max},${float_dmin})"

# Max、Min  -advanced
field.advanced[@javax.validation.constraints.Max]=groovy:```
    return [maximum:it.ann("javax.validation.constraints.Max")]
```
field.advanced[@javax.validation.constraints.Min]=groovy:```
    return [minimum:it.ann("javax.validation.constraints.Min")]
```

# Negative&NegativeOrZero
field.mock[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(${number_min},-1)"
field.mock[groovy:it.hasAnn("javax.validation.constraints.NegativeOrZero")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(${number_min},0)"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(${number_min},0.01,${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.NegativeOrZero")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(${number_min},0,${float_dmin})"

field.advanced[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_integer_types}.contains(it.jsonType().name())]={maximum:-1}
field.advanced[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_float_types}.contains(it.jsonType().name())]={maximum:-0.001}
field.advanced[@javax.validation.constraints.NegativeOrZero]={"maximum":0}

# javax.validation.constraints.Pattern
field.advanced[@javax.validation.constraints.Pattern]=groovy:```
    return tool.toJson([pattern:it.ann("javax.validation.constraints.Pattern","regexp")])
```

# Positive&PositiveOrZero
field.mock[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(1,${number_max})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.PositiveOrZero")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,${number_max})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0.01,${number_max},${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.PositiveOrZero")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,${number_max},${float_dmin})"

field.advanced[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_integer_types}.contains(it.jsonType().name())]={minimum:1}
field.advanced[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_float_types}.contains(it.jsonType().name())]={minimum:0.001}
field.advanced[@javax.validation.constraints.PositiveOrZero]={minimum:0}

# javax.validation.constraints.Size

field.mock[groovy:it.hasAnn("javax.validation.constraints.Size")&&it.jsonType().name()=="java.lang.String"]=groovy:```
    def ann = it.annMap("javax.validation.constraints.Size")
    if(ann.containsKey("min")&&ann.containsKey("max")){
        return "@string("+ann["min"]+","+ann["max"]+")"
    }else if(ann.containsKey("min")){
        return "@string("+ann["min"]+")"
    }else if(ann.containsKey("max")){
        return "@string(0,"+ann["max"]+")"
    }
```
field.advanced[@javax.validation.constraints.Size]=groovy:```
    def element = (it.jsonType().name() == "java.lang.String")?"Length":"Items"
    def ann = it.annMap("javax.validation.constraints.Size")
    def advanced = [:]
    if(ann.containsKey("min")){
        advanced["min"+element] = ann["min"]
    }
    if(ann.containsKey("max")){
        advanced["max"+element] = ann["max"]
    }
    return advanced
```
````

-   上述配置可根据实际情况予以必要的调整

| key | desc |
| --- | --- |
| number\_min | 数字最小值 |
| number\_max | 数字最大值 |
| float\_dmin | 浮点数小数位数 |

_**快速配置**_

```
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/javax.validation.config
```

或者

```
properties.additional=https://gitee.com/tangcent/easy-yapi/raw/master/third/javax.validation.config
```

#### 完全-分组

## Jackson
### JsonProperty&JsonIgnore

[推荐配置](https://github.com/tangcent/easy-yapi/blob/master/idea-plugin/src/main/resources/.recommend.easy.api.config)中默认支持.

```
#Support for Jackson annotations
field.name=@com.fasterxml.jackson.annotation.JsonProperty#value
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value
```

___

#### JsonIgnoreProperties

推荐配置中有提供选项, 但默认未选中.

````

#Support for Jackson annotation JsonIgnoreProperties

json.cache.disable=true
field.ignore=groovy:it.containingClass().annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")?.contains(it.name())
json.group=@com.fasterxml.jackson.annotation.JsonIgnoreProperties
field.parse.before[@com.fasterxml.jackson.annotation.JsonIgnoreProperties]=groovy:```
    def properties = it.annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")
    for(property in properties){
        def path = fieldContext.property(property)
        session.set("json-ignore", path, true)
    }
```
field.parse.after[@com.fasterxml.jackson.annotation.JsonIgnoreProperties]=groovy:```
    def properties = it.annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")
    for(property in properties){
        def path = fieldContext.property(property)
        session.remove("json-ignore", path)
    }
```
field.ignore=groovy:```
    return session.get("json-ignore", fieldContext.path())
```

````

## Dubbo
_**如果仅希望导出`markdown`**_

> 参照[导出普通java method文档](https://easyyapi.com/documents/export_methodDoc.html)即可

_**如果希望导出到`Apifox`**_

> 参照[自定义框架](https://easyyapi.com/documents/generic.html)

1.  取消勾选 Preferences(Settings) > Other Settings > Apifox Helper > Support > methodDoc

2.  勾选 Preferences(Settings) > Other Settings > Apifox Helper > Support > generic export

3.  在Preferences(Settings) > Other Settings > Apifox Helper > BuiltinConfig或者[本地文件](https://easyyapi.com/setting/local-file-config.html)引入配置:


```
properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/dubbo.config
```

4.  如果配置不满足预期, 复制并修改[dubbo.config](https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/dubbo.config)的内容放在配置里, 替换掉上面的引入配置