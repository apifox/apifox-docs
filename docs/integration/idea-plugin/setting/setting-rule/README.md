# 可配置规则

## api.name

> 用于设置API名称

> 缺省情况下, 默认使用api注释的第一行作为API的名称

#### Demo

***配置如下:***

```
# read api name from tag `api.name`
api.name=#api.name
```

***使用如下:***

```
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * @api.name Mock String
    * @undone
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }
}
```

#### demo

```
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    * @api.folder 宠物店/订单
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```

## api.status

> 标记接口`status`

#### 默认推荐配置

```
api.status=#status
```

#### demo

```
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    * @status released
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

    /**
    * Mock String
    * @status deprecated
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }
}
```

## api.tags

> 标记接口`tag`


#### 添加对swagger @ApiOperation支持

```
api.tag=@io.swagger.annotations.ApiOperation#tags
```

#### demo

```
/*
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @ApiOperation(value = "mock string", tag = {"swagger", "test"})
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```

## class.is.ctrl

> 默认的只会导出注解有`org.springframework.stereotype.Controller`或`org.springframework.web.bind.annotation.RestController`的类中的api.

> 当有导出未注解`org.springframework.stereotype.Controller`或`org.springframework.web.bind.annotation.RestController`的类中的api的需求时,可以配置此规则

#### 允许导出所有类中的`api`

可以配置为：

```
class.is.ctrl=true
```

#### 允许导出注释有`ctrl`类中的`api`

希望通过注释`@ctrl`来控制哪些类会包含`api`, 可以配置为：

```
class.is.ctrl=#ctrl
```

#### demo

```
/**
 * @ctrl
 */
@RequestMapping("/base")
public interface BaseController {

   /**
    * 当前ctrl名称
    *
    * @public
    */
   @RequestMapping("/ctrl/name")
   String ctrlName();
}
```

## class.prefix.path

> 设置API请求前缀

#### 默认推荐配置

```
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```

#### 使用推荐配置后，可识别如下spring配置

spring application.properties

```
server.servlet.context-path=/demo
```

spring application.yaml/application.yml

```
server:
  servlet:
      context-path: /demo
```

#### 自定义demo

```
class.prefix.path=/demo
```

## constant.field.ignore

> 忽略常量字段

#### 默认推荐配置

```
#ignore serialVersionUID
constant.field.ignore=serialVersionUID
```

使用如下配置代替:

```
#ignore serialVersionUID
constant.field.ignore=groovy:it.name()=="serialVersionUID"
```

#### demo

```
/**
 * 用户类型
 */
public class UserTypeConstant implements Serializable {

    private static final long serialVersionUID = -4607862808303533196L;

    public static final int ADMIN = 1;//管理员
    public static final int MEMBER = 2;//成员
    public static final int GUEST = 3;//游客

}
```

#### 对于如下注释

```
@see com.itangcent.common.constant.UserTypeConstant
```

#### 或者

```
{@link com.itangcent.common.constant.UserTypeConstant}
```

#### 将被解析为：

```
枚举: 1,2,3

枚举备注: 1 :管理员 2 :成员 3 :游客

mock: @pick(["1","2","3"])
```

## enum.use.custom

> 用于设置使用`@see`枚举类型时的默认取值字段

**假定有如下枚举类**

```
public enum UserType {
    //管理员
    ADMIN(1, "管理员"),

    //成员
    MEMBER(2, "成员"),

    //游客
    GUEST(3, "游客");

    private int code;
    private String desc;

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    UserType(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
```

**对于如下字段**

```
/**
* 用户类型
*
* @see UserType
*/
private int type;
```

#### 默认情况

* 由于UserType中不存在字段type, 默认情况下这里的@see UserType会被忽略掉

#### 增加配置

* 做如下配置,设置`@see UserType`时默认使用`code`字段作为取值

```
enum.use.custom[com.itangcent.common.constant.UserType]=code
```

* 则上述注释将等价于

```
/**
* 用户类型
* @see UserType#code
*/
private int type;
```

* 导出API结果为:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| type | integer | 非必须 |  | 用户类型 | 枚举: 1,2,3 <br>枚举备注: 1: 管理员 2: 成员 3: 游客<br> mock: @pick([1,2,3]) |

#### 统一处理

* 特殊的, 声明如下接口:

```
package com.itangcent.common.constant;

public interface BaseEnum {

    Long getCode();
}
```

* 改造`UserType`,使其继承`BaseEnum`

```
public enum UserType implements BaseEnum {
    ...
}
```

* 则可做如下配置,将所有继承`BaseEnum`的类默认使用`code`字段作为取值

```
enum.use.custom[groovy:it.isExtend("com.itangcent.common.constant.BaseEnum")]=code
```

## enum.use.by.type

> 默认使用类型一致的字段, 优先级低于`enum.use.custom`

**假定有如下枚举类**

```
public enum UserType {
    //管理员
    ADMIN(1, "管理员"),

    //成员
    MEMBER(2, "成员"),

    //游客
    GUEST(3, "游客");

    private int code;
    private String desc;

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    UserType(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
```

**对于如下字段**

```
/**
* 用户类型
*
* @see UserType
*/
private int type;
```

**推荐配置中有**

```
enum.use.by.type=true
```

* 上述注释将被处理为:

```
/**
* 用户类型
* @see UserType#code
*/
private int type;
```

* 导出API结果为:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| type | integer | 非必须 |  | 用户类型 | 枚举: 1,2,3 <br>枚举备注: 1: 管理员 2: 成员 3: 游客<br> mock: @pick([1,2,3]) |

## enum.use.ordinal

> 用于设置使用`@see`枚举类型时的默认使用`ordinal`作为取值

> 优先级低于`enum.use.custom`和`enum.use.by.type`

> 所以要使用`enum.use.ordinal`需要先在推荐配置中取消`enum.use.by.type`

**假定有如下枚举类**

```
public enum UserType {
    //管理员
    ADMIN(1, "管理员"),

    //成员
    MEMBER(2, "成员"),

    //游客
    GUEST(3, "游客");

    private int code;
    private String desc;

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    UserType(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
```

**对于如下字段**

#### 默认情况

* 由于UserType中不存在字段type, 默认情况下这里的`@see UserType`会被忽略掉

#### 增加配置

* 做如下配置, 设置`@see UserType`时默认使用`ordinal`字段作为取值

```
enum.use.ordinal[com.itangcent.common.constant.UserType]=true
```

* 则上述注释将等价于

```
/**
* 用户类型
* @see UserType#ordinal()
*/
private int type;
```

* 导出API结果为:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| type | integer | 非必须 |  | 用户类型 | 枚举: 1,2,3 <br>枚举备注: 1: 管理员 2: 成员 3: 游客<br> mock: @pick([1,2,3]) |

#### 统一处理

* 特殊的, 声明如下接口:

```
package com.itangcent.common.constant;

public interface BaseEnum {
}
```

* 改造`UserType,`使其继承`BaseEnum`

```
public enum UserType implements BaseEnum {
    ...
}
```

* 则可做如下配置, 将所有继承`BaseEnum`的类默认使用`ordinal`作为取值

```
enum.use.ordinal[groovy:it.isExtend("com.itangcent.common.constant.BaseEnum")]=true
```

#### 整个项目所有`@see`枚举类都默认使用`ordinal`作为取值

```
enum.use.ordinal=true
```

## enum.use.name

> 用于设置使用`@see`枚举类型时的默认使用`name`作为取值

> 优先级低于`enum.use.custom`和`enum.use.by.type`

> 所以要使用`enum.use.name`需要先在推荐配置中取消`enum.use.by.type`

**假定有如下枚举类**

```
public enum UserType {
    //管理员
    ADMIN(1, "管理员"),

    //成员
    MEMBER(2, "成员"),

    //游客
    GUEST(3, "游客");

    private int code;
    private String desc;

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    UserType(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
```

**对于如下字段**

```
/**
* 用户类型
*
* @see UserType
*/
private int type;
```

#### 默认情况

* 由于UserType中不存在字段type, 默认情况下这里的`@see UserType`会被忽略掉

#### 增加配置

* 做如下配置, 设置`@see UserType`时默认使用`name`字段作为取值

```
enum.use.name[com.itangcent.common.constant.UserType]=true
```

* 则上述注释将等价于

```
/**
* 用户类型
* @see UserType#name()
*/
private String type;
```

* 导出API结果为:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| type | string | 非必须 |  | 用户类型 | 枚举: ADMIN, MEMBER, GUEST <br>枚举备注: ADMIN: 管理员 MEMBER: 成员 GUEST: 游客<br> mock: @pick([ADMIN,MEMBER,GUEST]) |

#### 统一处理

* 特殊的, 声明如下接口:

```
package com.itangcent.common.constant;

public interface BaseEnum {
}
```

* 改造`UserType`,使其继承`BaseEnum`

```
public enum UserType implements BaseEnum {
    ...
}
```

* 则可做如下配置,将所有继承`BaseEnum`的类默认使用`name`作为取值

```
enum.use.name[groovy:it.isExtend("com.itangcent.common.constant.BaseEnum")]=true
```

#### 整个项目所有`@see`枚举类都默认使用`name`作为取值

```
enum.use.name=true
```

## field.default-value

> 用于设置`字段`的默认值

#### 原生编码支持

默认的所有含有默认初始值的字段, 取其默认初始值. 如:

```
private Integer code = 200;//响应码
```

#### 额外的配置

配置如下:

```
field.default.value=#default
```

DemoDto.java

```
public class DemoDto{

    /**
     * 价格
     * @default 666
     */
    @NotNull
    private Float price;

    ...
}
```

导出结果如下:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| price | number | 必须 |666  | 价格 | |


##  field.example

> 字段示例信息

#### demo

配置如下:

```
field.demo=#demo
```

使用如下:

```
    /**
     * @demo tangcent
     */
    private String name;//用户名
```


## field.description

> 字段的额外注释

#### 默认推荐配置

```
#deprecated info(java)
field.description[#deprecated]=groovy:"\n「已废弃」" + it.description("deprecated")
field.description[@java.lang.Deprecated]=「已废弃」

#deprecated info(kotlin)
field.description[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")

```

#### 添加对swagger @ApiModelProperty支持

```
field.description=@io.swagger.annotations.ApiModelProperty#value
```

#### demo

SwaggerModel.java

```
public class SwaggerModel {

    /**
     * @deprecated 不再使用
     */
    @ApiModelProperty(value = "字段A", required = true)
    private String a;

    //constructors...

    //getters...
}
```

#### 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| a | string | 非必须 |666  | 字段A「已废弃」不再使用 | |

## field.ignore

> 忽略字段(设置某些字段不出现在json中,或不需要请求时给出)

#### 默认推荐配置

```
#Support for Jackson annotations
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value

#Support for Gson annotations
field.ignore=!@com.google.gson.annotations.Expose#serialize
```

#### demo

TestJsonIgnoreBean.java

```
public class TestJsonIgnoreBean {

    @Expose(serialize = true)
    private Long shouldNotIgnoreForGson;

    @Expose(serialize = false)
    private Long shouldIgnoreForGson;

    @JsonIgnore(false)
    private Long shouldNotIgnoreForJackson;

    @JsonIgnore
    private Long shouldIgnoreForJackson;

    //constructors...

    //getters...
}
```

#### 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| shouldNotIgnoreForGson| integer | 非必须 |  | |mock: @natural(0,10000) |
| shouldNotIgnoreForJackson| integer | 非必须 |  | |mock: @natural(0,10000) |

#### 定制化配置示例

* 忽略指定名称的字段:

配置如下:

```
# ignore field 'log'
field.ignore=log
```

将忽略如下字段:

```
private String log;
```

* 忽略指定类型的字段:

配置如下:

```
# ignore field 'log' typed xxx.xxx.Log
field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
```

将忽略如下字段:

```
private Log xxx;
```

* 忽略指定`modifier`的字段:

配置如下:

```
#ignore transient field
field.ignore=groovy:it.hasModifier("transient")||it.hasModifier("protected")
```

将忽略如下字段:

```
private transient Int xxx;
protected Long yyy;
```


## field.mock

> 用于生成`apifox`相关mock信息

#### 默认推荐配置有三部分


***
**允许通过注释`@mock`定义`mock`规则**

```
#apifox mock
field.mock=#mock
```

#### demo

DemoDto.java

```
public class DemoDto {

    /**
     * @mock tangcent
     */
    @NotBlank
    private String name;//用户名

    /**
     * 年龄
     * @mock 1@natural(0,9)
     */
    @NotNull
    private Integer age;

}
```

作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| name| string | 非必须 |  | 用户名|mock: tangcent |
| age| integer | 非必须 |  | 年龄|mock: 1@natural(0,9) |

#### 通用mock

```
#mock for date

###set resolveMulti = first
java_date_types=["java.util.Date","java.sql.Timestamp","java.time.LocalDate","java.time.LocalDateTime"]
field.mock[groovy:${java_date_types}.contains(it.type().name())&&it.jsonType().name()=="java.lang.String"] = groovy:"@date"
field.mock[groovy:${java_date_types}.contains(it.type().name())&&it.jsonType().name()=="java.lang.Long"] = groovy:"@timestamp@string(\"number\", 3)"
###set resolveMulti = error
```

#### demo

DemoDto.java

```
public class DemoDto {

    //生日
    private LocalDate birthDay;

    //注册时间
    private LocalDateTime regtime;

}
```

作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| birthDay| string | 非必须 |  |生日|mock: @date |
| regtime| string | 非必须 |  | 注册时间|mock: @date |


***
**`javax.validation`相关mock**

```
# mock for javax.validation

###set resolveMulti = first
# define var
number_min=-9999
number_max=9999
float_dmin=2
java_integer_types=["java.lang.Integer","int","java.lang.Long","long","java.lang.Short","short","java.math.BigInteger"]
java_float_types=["java.lang.Float","float","java.lang.Double","double","java.math.BigDecimal"]
# mock_integer_or_float=${java_integer_types}.contains(it.type().name())?"@integer":"@float"

# AssertTrue|AssertFalse|Email
field.mock[@javax.validation.constraints.AssertTrue]=true
field.mock[@javax.validation.constraints.AssertFalse]=false
field.mock[@javax.validation.constraints.Email]=groovy:"@email"

# Positive&PositiveOrZero
field.mock[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(1,${number_max})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.PositiveOrZero")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,${number_max})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Positive")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0.01,${number_max},${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.PositiveOrZero")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,${number_max},${float_dmin})"

# Negative&NegativeOrZero
field.mock[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(${number_min},-1)"
field.mock[groovy:it.hasAnn("javax.validation.constraints.NegativeOrZero")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(${number_min},0)"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Negative")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(${number_min},0.01,${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.NegativeOrZero")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(${number_min},0,${float_dmin})"

# Max+Min
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&it.hasAnn("javax.validation.constraints.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.Min")+","+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&it.hasAnn("javax.validation.constraints.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.Min")+","+it.ann("javax.validation.constraints.Max")+",${float_dmin})"

# Max|Min
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,"+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Min")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.Min")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Max")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,"+it.ann("javax.validation.constraints.Max")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.Min")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.Min")+")"

# DecimalMax+DecimalMin
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.DecimalMin")+","+it.ann("javax.validation.constraints.DecimalMax")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.DecimalMin")+","+it.ann("javax.validation.constraints.DecimalMax")+",${float_dmin})"

# DecimalMax|DecimalMin
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer(0,"+it.ann("javax.validation.constraints.DecimalMax")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:"@integer("+it.ann("javax.validation.constraints.DecimalMin")+")"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMax")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float(0,"+it.ann("javax.validation.constraints.DecimalMax")+",${float_dmin})"
field.mock[groovy:it.hasAnn("javax.validation.constraints.DecimalMin")&&${java_float_types}.contains(it.jsonType().name())]=groovy:"@float("+it.ann("javax.validation.constraints.DecimalMin")+",${float_dmin})"

###set resolveMulti = error
```

#### demo

ValidationDemoDto.java

```
public class ValidationDemoDto {

    @NotNull
    private String str;

    @Min(666)
    private Integer minInt;

    @Max(999)
    private Integer maxInt;

    @Min(666)
    private Double minDouble;

    @Max(999)
    private double maxDouble;

    @Min(666)
    @Max(999)
    private Integer rangeInt;

    @Min(66)
    @Max(9999)
    private float rangeFloat;

    @Negative
    private Integer negative;

    @NegativeOrZero
    private Integer negativeOrZero;

    @Positive
    private Integer positive;

    @PositiveOrZero
    private Integer positiveOrZero;

    @Positive
    private Float positiveFloat;

    @PositiveOrZero
    private float positiveOrZeroFloat;

    @Email
    private String email;

    @AssertTrue
    private boolean assertTrue;

    @AssertFalse
    private boolean assertFalse;

    //getter&setter
}

```

作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| rangeInt| integer | 非必须 |  ||mock: @integer(666,999) |
| positiveOrZeroFloat| number | 非必须 |  | |mock: @float(0,88888888,6) |
| maxInt| integer | 非必须 |  ||mock: @integer(0,999) |
| minInt| integer | 非必须 |  | |mock: @integer(666) |
| assertFalse| boolean | 非必须 |  ||mock: false |
| maxDouble| number | 非必须 |  | |mock: @float(0,999) |
| minDouble| number | 非必须 |  ||mock: @float(666) |
| positive| integer | 非必须 |  | |mock: @integer(1,88888888) |
| positiveOrZero| integer | 非必须 |  ||mock: @integer(0,88888888) |
| str| string | 必须 |  | | |
| negative| integer | 非必须 |  ||mock: @integer(-888888888,-1) |
| rangeFloat| number | 非必须 |  | |mock: @float(66,9999,6) |
| assertTrue| boolean | 非必须 |  ||mock: true |
| negativeOrZero| integer | 非必须 |  | |mock: @integer(-888888888,0) |
| positiveFloat| number | 非必须 |  ||mock: @float(0.01,88888888,6) |
| email| string | 非必须 |  | |mock: @email |


***

#### field.mock.resolveProperty

* 用以开关是否解析`field.mock`规则结果中的占位符如`${float_with_two}`

* 默认为`true`,如果不希望解析, 可以设置为关闭

```
field.mock.resolveProperty=false
```

#### 使用示例

配置如下:

```
#apifox mock
field.mock=#mock

#小数点后两位
float_with_two=@natural(0,10000).@natural(0,100)
```

DemoDto.java

```
public class DemoDto {

    /**
     * 价格
     * @mock ${float_with_two}
     */
    @NotNull
    private Float price;

}
```

导出结果

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| price| number | 必须 |  |价格|mock: @natural(0,10000).@natural(0,100) |


## field.name

> 用于设置输出/输入的字段名(用于json中字段名与类中字段名不一致)

#### 默认推荐配置

```
#Support for Jackson annotations
field.name=@com.fasterxml.jackson.annotation.JsonProperty#value

#Support for Gson annotations
field.name=@com.google.gson.annotations.SerializedName#value
```

#### demo

TestJsonFieldBean.java

```
public class TestJsonFieldBean {
    @JsonProperty("a")
    private Long propertyA;

    @SerializedName("b")
    private Long propertyB;

    //constructors...

    //getters...
}
```

作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| a| integer | 非必须 |  ||mock: @natural(0,10000)|
| b| integer | 非必须 |  ||mock: @natural(0,10000)|

#### 配置驼峰转下划线

```
#convert camel to underline
field.name=groovy:tool.camel2Underline(it.name())
```


## field.required

> 用于标记字段是否为必须(即不可为空)

#### 默认推荐配置

```
#Support for javax.validation annotations
field.required=@javax.validation.constraints.NotBlank
field.required=@javax.validation.constraints.NotNull
field.required=@javax.validation.constraints.NotEmpty
```

#### 添加对swagger @ApiModelProperty支持

```
field.required=@io.swagger.annotations.ApiModelProperty#required
```

#### demo

SwaggerModel.java

```
public class SwaggerModel {

    @ApiModelProperty(value = "字段A", required = true)
    private String a;

    public String getA() {
        return a;
    }

    public void setA(String a) {
        this.a = a;
    }
}
```

作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| a| integer | 必须 |  ||mock: @natural(0,10000)|

## folder.name

> 用于设置API所属文件夹的名称

> 缺省情况下, 默认使用api所在类作为所属文件夹

#### demo

配置如下:

```
# read folder name from tag `folder`
folder.name=#folder
```

使用如下:

```
/**
* 一些Mock相关的API
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * @folder Mock字符串
    */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }
}
```

默认情况下上述api会归属到文件夹`一些Mock相关的API`, 加上注释`@folder Mock字符串`后归属到`Mock字符串`

### ignore

> 用于忽略`class`/`method`, 不进行解析

> 注释在`class`上时,整个类将被忽略

> 注释在`method`上时,当前方法将被忽略

#### 默认推荐配置

```
ignore=#ignore
```

#### demo

* 在类上注释`@ignore`忽略当前类

```
/**
* Mock Apis
*
* @ignore
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {
}
```

* 在方法上注释`@ignore`忽略当前API

```
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
        * Mock String
        * @ignore
        */
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```

## mdoc.class.filter

> 用于选择哪些类可以导出方法(rpc)文档, 根据当前项目情况

#### demo

* 如果所有的RPC接口类都以`Client`结尾, 则可配置:

```
mdoc.class.filter=groovy:it.name().endsWith("Client")
```

* 如果所有的RPC接口类包都在`a.b.c.client`, 则可配置:

```
mdoc.class.filter=groovy:it.name().startsWith("a.b.c.client")
```


## mdoc.method.path

> 用于设置方法文档(rpc)的路径

> 为了防止重载方法覆盖,默认生成的path后加上了参数信息: `$className/$methodName/$args`

> 根据项目情况, 可自行配置以简化路径长度

#### 修改默认行为

假设有如下类

```
package com.itangcent.dubbo.demo.client;

/**
 * 用户相关Client
 *
 * @module user_dubbo
 */
public interface UserClient {

    /**
     * 更新用户名
     *
     * @param id      用户id
     * @param newName 新的用户名
     * @param slogon  个人签名
     * @deprecated 改用{@link #update(UserInfo)}
     */
    public UserInfo set(long id, String newName,
                        String slogon,
                        long times);
}
```

默认情况下

* 导出的路径为:

`/com.itangcent.dubbo.demo.client.UserClient/set/long/java.lang.String/java.lang.String/long/`

*如果确认无重载方法, 可以尝试去掉参数信息:*

* 配置如下:

```
mdoc.method.path=groovy:it.containingClass().name()+"/"+it.name()
```

* 导出的接口路径为: `/com.itangcent.dubbo.demo.client.UserClient/set`

可以尝试去掉包名:

* 配置如下:

```
mdoc.method.path=groovy:it.containingClass().getSimpleName()+"/"+it.name()
```

* 导出的接口路径为: `/UserClient/set`

可以进一步将类名转换为小写:

* 配置如下:

```
mdoc.method.path=groovy:it.containingClass().getSimpleName().toLowerCase()+"/"+it.name()
```

* 导出的接口路径为: `/userclient/update`


## mdoc.method.http.method

> 设置方法文档(rpc)HTTP请求方式, 默认`POST`

#### 修改默认行为

将无参方法设置为`GET`

* 配置如下:

```
mdoc.method.http.method=groovy:it.argCnt()==0?"GET":null
```


## method.description

> 方法(API)的额外注释

#### 默认推荐配置

```
#deprecated info(java)
method.doc[#deprecated]=groovy:"\n「已废弃」" + it.doc("deprecated")
method.doc[@java.lang.Deprecated]=「已废弃」

method.doc[groovy:it.containingClass().hasDoc("deprecated")]=groovy:"\n「已废弃」" + it.containingClass().doc("deprecated")
method.doc[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=「已废弃」


#deprecated info(kotlin)
method.doc[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")
method.doc[groovy:it.containingClass().hasAnn("kotlin.Deprecated")]=groovy:"\n「已废弃」 " + it.containingClass().ann("kotlin.Deprecated","message")

```

#### 添加对swagger @ApiOperation支持

```
method.doc=@io.swagger.annotations.ApiOperation#value
```

#### demo

```
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @ApiOperation(value = "mock string")
    @GetMapping("/string")
    public String mockString() {
        return Result.success("mock string");
    }

}
```

## method.content-type

> 用于设置API请求默认的`content-type,` 插件依然会在必要的时候强行覆盖掉

> 如当遇到`@RequestBody`时, 将被强行覆盖为`application/json`

**默认情况下, 插件优先使用`application/x-www-form-urlencoded`, 如希望优先使用`multipart/form-data`**

配置如下:

```
method.content.type=multipart/form-data
```


## method.default-http-method

> 设置默认的api的HttpMethod

> 缺省情况下, 当API上未指定HttpMethod, 且无特殊参数时默认使用`GET`

**如希望默认使用`POST`**

配置如下:

```
method.default.http.method=POST
```


## method.additional.header

> API需要额外的`header`

#### 如JWT, 所有的接口都需要在header中携带token

```
method.additional.header={name: "Authorization",value: "",desc: "认证Token",required:true, example:""}
```

#### 如果需要排除指定开放的接口不需要token可以这样配置:

* 假定有如下注解:

```
package com.itangcent.common.annotation;

/**
 * 声明接口为公开接口
 */
@Documented
@Retention(RUNTIME)
@Target({TYPE, METHOD})
public @interface Public {
}

```

* 则可如此配置

```
method.additional.header[!@com.itangcent.common.annotation.Public]={name: "Authorization",value: "",desc: "认证Token",required:true}
```

* 等价于

```
method.additional.header[groovy:!it.hasAnn("com.itangcent.common.annotation.Public")]={name: "Authorization",value: "",desc: "认证Token",required:true}
```

#### demo

```
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * public api
    * Token is not required
    */
    @Public
    @GetMapping("/apiWithoutToken")
    public Result<String> apiWithoutToken() {
        return Result.success("no token");
    }

    /**
    * private api
    * Token is required
    */
    @GetMapping("/apiWithToken")
    public Result<String> apiWithToken() {
        return Result.success("wow,you got a token");
    }

}
```


***
**如果需要针对指定包下添加header**

```
method.additional.header[groovy:it.containingClass().name().startsWith("com.test.api")]={name: "Authorization",value: "",desc: "认证Token",required:true}
```

**同理如果指定包下不需要添加header则取反就行了**

```
method.additional.header[groovy:!it.containingClass().name().startsWith("com.test.api")]={name: "Authorization",value: "",desc: "认证Token",required:true}
```

***
**支持添加多个header**

```
method.additional.header[groovy:it.containingClass().name().startsWith("com.test.api")]={name: "a",value: "",desc: "",required:true}
method.additional.header[groovy:it.containingClass().name().startsWith("com.test.api")]={name: "b",value: "",desc: "",required:true}
```

## method.additional.param

> API需要额外的`param`

> 仅适用于url参数,不支持`form`/`body`

**例如接口都需要在`param`中携带token**

```
method.additional.param={name: "Authorization",value: "",desc: "认证Token",required:true}
```

**如果需要排除指定开放的接口不需要token可以这样配置:**

* 假定有如下注解:

```
package com.itangcent.common.annotation;

/**
 * 声明接口为公开接口
 */
@Documented
@Retention(RUNTIME)
@Target({TYPE, METHOD})
public @interface Public {
}

```

* 则可如此配置

```
method.additional.param[!@com.itangcent.common.annotation.Public]={name: "Authorization",value: "",desc: "认证Token",required:true, example:""}
```

* 等价于

```
method.additional.param[groovy:!it.hasAnn("com.itangcent.common.annotation.Public")]={name: "Authorization",value: "",desc: "认证Token",required:true, example:""}
```

#### demo

```
/**
* Mock Apis
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * public api
    * Token is not required
    */
    @Public
    @GetMapping("/apiWithoutToken")
    public Result<String> apiWithoutToken() {
        return Result.success("no token");
    }

    /**
    * private api
    * Token is required
    */
    @GetMapping("/apiWithToken")
    public Result<String> apiWithToken() {
        return Result.success("wow,you got a token");
    }

}
```

## module

> 用于API分组

> 当无配置生效时, 默认使用当前模块/项目名

> 导出`postman`时,将为每个`module`创建一个文件夹

> 导出`yapi`时,每个`module`对应`yapi`中的一个项目

**默认推荐配置**

```
module=#module
```

#### demo

```
/**
* Mock Apis
*
* @module mock
*/
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {
}
```

## method.return

> 设置方法的返回值

> 常用于以下情况:

* 方法返回Object
* 方法返回类型中的泛型类型未明确`<Object>`/`<?>`/`<*>`
* 方法返回类型与实际响应无关, 例如通过操作HttpServletResponse来返回响应

#### 如以下API

API:

```
    /**
     * 通过`HttpServletResponse`写入响应
     */
    @RequestMapping(value = "/writeByResponse", method = RequestMethod.GET)
    public void writeByResponse(HttpServletResponse response) throws IOException {
        UserInfo userInfo = new UserInfo();
        userInfo.setId(1l);
        userInfo.setName("Tom");
        userInfo.setAge(25);
        response.getOutputStream().write(new Gson().toJson(Result.success(userInfo)).getBytes(Charsets.UTF_8));
    }
```

* 这个方法返回的是`void`,但实际响应的是`Result<UserInfo>`, 所以需要通过额外的途径来表明此`API`的实际响应.

***

简单的,可做如下配置:

```
method.return=#real_return
```

使用方法:

```
/**
 * @real_return com.itangcent.common.dto.Result<com.itangcent.common.model.UserInfo>
 */
```


***
为了方便书写, 我们可以尝试使用`{@link}`来设置实际响应类型, 利用`helper.resolveLink`来解析

例如做如下配置:

```
method.return[#real_return]=groovy: helper.resolveLink(it.doc("real_return"))
```

使用方法:

```
/**
 * @real_return {@link Result<UserInfo>}
 */
```

***
更进一步的, 如果所有的响应都由`com.itangcent.common.dto.Result`包装

做如下配置:

```
method.return[#real_return]=groovy: "com.itangcent.common.dto.Result<" +  helper.resolveLink(it.doc("real_return")) +">"
```

使用方法:

```
/**
 * @real_return {@link UserInfo}
 */
```


## method.return.main

> 此配置仅设置返回值的核心主体, 使得`@return`的注释落在主体属性上,不影响返回类型及字段.

#### demo

Result.java

```
package com.itangcent.common.dto;

public class Result<T> implements IResult {

    private Integer code;//响应码

    private String msg;//响应消息

    private T data;//响应数据

    //constructors...

    //getters...
}
```

#### 可做如下配置

```
method.return.main[groovy:it.returnType().isExtend("com.itangcent.common.dto.Result")]=data
```

**接口示例1:**

* 接口代码:

```
    /**
     * 获取当前用户类型
     *
     * @return 当前用户类型,{@link com.itangcent.common.constant.UserTypeConstant}
     */
    @GetMapping("/type")
    public Result<Integer> currUserType() {
        return Result.success(UserType.values()[new Random(System.currentTimeMillis()).nextInt(UserType.values().length)].getType());
    }
```

* 导出API的响应:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| msg| string | 非必须 |  |响应消息|mock:|
| code| integer | 非必须 |  |响应码|mock: 0|
| data| integer | 非必须 |  |响应数据<br/>当前用户类型,[用户类型]|枚举: 1,2,3<br/>枚举备注: 1:管理员 2: 成员 3: 游客<br/>mock: @pick([1,2,3])|

**接口示例2:**

* 接口代码:

```
    /**
     * 获取所有用户类型
     *
     * @return {@link com.itangcent.common.constant.UserType#getType()}
     */
    @GetMapping("/types")
    public Result<List<Integer>> types() {
        final List<Integer> types = Stream.of(UserType.values()).map(UserType::getType).collect(Collectors.toList());
        return Result.success(types);
    }
```

* 导出API的响应:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| msg| string | 非必须 |  |响应消息|mock:|
| code| integer | 非必须 |  |响应码|mock: 0|
| +data| integer[] | 非必须 |  ||item 类型: integer
| | integer |  |  ||枚举: 1,2,3<br/>枚举备注: 1:管理员 2: 成员 3: 游客<br/>mock: @pick([1,2,3])|

**附:**

UserTypeConstant.java

```
/**
 * 用户类型
 */
public class UserTypeConstant implements Serializable {

    private static final long serialVersionUID = -4607862808303533196L;

    public static final int ADMIN = 1;//管理员
    public static final int MEMBER = 2;//成员
    public static final int GUEST = 3;//游客

}
```

UserType.java

```
package com.itangcent.common.constant;

/**
 * 用户类型
 */
public enum UserType {
    //管理员
    ADMIN(1, "管理员"),

    //成员
    MEMBER(2, "成员"),

    //游客
    GUEST(3, "游客");

    private int type;//用户类型

    private String desc;

    //constructors...

    //getters...
}
```

## json.rule.convert

> 用于设置某些类型转换为其他类型处理, 通常用于使用了Spring的自定义类型转换器的情况

#### 默认推荐配置

```
#The ObjectId and Date are parsed as strings
json.rule.convert[org.bson.types.ObjectId]=java.lang.String
json.rule.convert[java.util.Date]=java.lang.String
json.rule.convert[java.sql.Timestamp]=java.lang.String
json.rule.convert[java.time.LocalDateTime]=java.lang.String
json.rule.convert[java.time.LocalDate]=java.lang.String

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


## json.rule.enum.convert

> 用于设置枚举类型的转换 优先级低于`json.rule.convert`

**假定有如下枚举类**

```
public enum UserType {
    //管理员
    ADMIN(1, "管理员"),

    //成员
    MEMBER(2, "成员"),

    //游客
    GUEST(3, "游客");

    private int type;
    private String desc;

    public int getType() {
        return type;
    }

    public String getDesc() {
        return desc;
    }

    UserType(int type, String desc) {
        this.type = type;
        this.desc = desc;
    }
}
```

**对于如下字段**

```
/**
* 用户类型
*/
private UserType type;
```

#### 默认情况

* 默认将枚举类型转换为`String`处理,给出可用值为枚举中的实例名

* 上述字段将被处理为

```
/**
* 用户类型
* @see UserType
*/
private String type;
```

* 导出API结果为:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| type| string | 非必须 |  |用户类型|枚举: ADMIN,MEMBER,GUEST<br/>枚举备注: ADMIN :管理员 MEMBER :成员 GUEST :游客<br/>mock: @pick(["ADMIN","MEMBER","GUEST"]))|

#### 增加配置

* 做如下配置,将其转换为`int`处理,给出可用值为枚举中的`type`字段

```
json.rule.enum.convert[com.itangcent.common.constant.UserType]=~#type
```

* 则上述字段将被处理为

```
/**
* 用户类型
* @see UserType#type
*/
private int type;
```

* 导出API结果为:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| type| integer | 非必须 |  |用户类型|枚举: 1,2,3<br/>枚举备注: 1 :管理员 2 :成员 3 :游客<br/>mock: @pick([1,2,3]))|

#### 统一处理

* 特殊的, 声明如下接口:

```
package com.itangcent.common.constant;

public interface TypeAble {
    int getType();
}
```

* 改造`UserType`,使其继承`TypeAble`

```
public enum UserType implements TypeAble {
    ...
}
```

* 则可做如下配置,将所有继承`TypeAble`的类转换为`int`处理,给出可用值为枚举中的`type`字段

```
json.rule.enum.convert[groovy:it.isExtend("com.itangcent.common.constant.TypeAble")]=~#type
```

## json.rule.field.ignore

> 忽略字段(设置某些字段不出现在json中,或不需要请求时给出)

> `deprcated`, see `field.ignore`

#### 默认推荐配置

```
#Support for Jackson annotations
json.rule.field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value

#Support for Gson annotations
json.rule.field.ignore=!@com.google.gson.annotations.Expose#serialize
```

#### demo

TestJsonIgnoreBean.java

```
public class TestJsonIgnoreBean {

    @Expose(serialize = true)
    private Long shouldNotIgnoreForGson;

    @Expose(serialize = false)
    private Long shouldIgnoreForGson;

    @JsonIgnore(false)
    private Long shouldNotIgnoreForJackson;

    @JsonIgnore
    private Long shouldIgnoreForJackson;

    //constructors...

    //getters...
}
```

作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| shouldNotIgnoreForGson| integer | 非必须 |  ||mock: @natural(0,10000)|
| shouldNotIgnoreForJackson| integer | 非必须 |  ||mock: @natural(0,10000)|

#### 定制化配置示例

* 忽略指定名称的字段:
配置如下：

```
# ignore field 'log'
json.rule.field.ignore=log
```

将忽略如下字段:

```
private String log;
```

* 忽略指定类型的字段:

配置如下:

```
# ignore field 'log' typed xxx.xxx.Log
json.rule.field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
```

将忽略如下字段:

```
private Log xxx;
```

* 忽略指定modifier的字段:

配置如下:

```
#ignore transient field
json.rule.field.ignore=groovy:it.hasModifier("transient")||it.hasModifier("protected")
```

将忽略如下字段:

```
private transient Int xxx;
protected Long yyy;
```

## json.rule.field.name

> 用于设置输出/输入的字段名(用于json中字段名与类中字段名不一致)

#### 默认推荐配置

```
#Support for Jackson annotations
json.rule.field.name=@com.fasterxml.jackson.annotation.JsonProperty#value

#Support for Gson annotations
json.rule.field.name=@com.google.gson.annotations.SerializedName#value
```

#### demo

TestJsonFieldBean.java

```
public class TestJsonFieldBean {
    @JsonProperty("a")
    private Long propertyA;

    @SerializedName("b")
    private Long propertyB;

    //constructors...

    //getters...
}
```

#### 作为API返回值导出:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | ---- | --- | --- | ---- |
| a| integer | 非必须 |  ||mock: @natural(0,10000)|
| b| integer | 非必须 |  ||mock: @natural(0,10000)|


## param.default-value

> 用于设置API参数的默认值

#### 添加对swagger @ApiParam支持

```
param.default.value=@io.swagger.annotations.ApiParam#defaultValue
```

#### demo

```
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @GetMapping("/string")
    public String mockString(
            @ApiParam(value = "seed for mock",defaultValue = "666")  long seed) {
        return Result.success("mock string");
    }

}
```

## param.example

> 参数示例信息

#### demo

配置如下:

```
param.demo=groovy:it.method().doc("demo",it.name())
```

使用如下:

```
    /**
     * @demo newName apifox
     */
    @RequestMapping(value = "/set", method = RequestMethod.PUT)
    public Object set(@RequestParam String newName) {
                      ...
    }
```

## param.description

> 参数的额外注释

#### 在注释中给出参数类型

```
param.doc=js:"类型:"+it.type().name()
```

#### 在注释中给出参数类型并去掉java包名

```
param.doc=groovy:"类型:"+tool.uncapitalize(it.type().name().replace("java.lang.",""))
```

**示例API**

```
    /**
     * 更新用户名
     *
     * @param id      用户id
     * @param newName 新的用户名
     * @param slogon  个人签名
     * @deprecated 改用{@link #update(UserInfo)}
     */
    @RequestMapping(value = "/set", method = RequestMethod.PUT)
    public Object set(long id,
                      @RequestParam String newName,
                      @RequestParam(required = false, defaultValue = "haha") String slogon,
                      @RequestParam(required = false, defaultValue = "10") long times) {
            ...
    }
```

**导出结果如下:**

请求参数:


| 参数名称 |是否必须| 示例 | 备注 |
| --- | --- | --- | --- |
| id |是  |  |用户 id<br/> 类型: long |
|  newName| 是 |  | 新的用户名<br/>类型: string |
|  slogan| 是 |  | 个人签名<br/>类型: string |
|  times| 是 |  | 类型: long |


## param.type

> 用于设置API参数在HTTP请求中的类型(位置:body/form/query)

> `@RequestBody`/`@ModelAttribute`/`@RequestHeader`/`@PathVariable`等忽略此规则

> 参数注解有`@RequestParam`且`HttpMehotd`为`GET`也忽略此规则

> 其他不满足规则的参数在规则缺省的情况下, 优先采取`query`模式

#### 配置示例

**全设置为form, 优先使用表单进行提交:**

```
param.type=form
```

**RequestParam作为query, 其他做为form:**

```
param.type[@org.springframework.web.bind.annotation.RequestParam]=query
param.type=form
```

## param.ignore

> 忽略API参数

#### 添加对swagger @ApiParam支持

```
param.ignore=@io.swagger.annotations.ApiParam#hidden
```

#### demo

```
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @GetMapping("/string")
    public String mockString(
            @ApiParam(value = "seed for mock",hidden = true)  long seed) {
        return Result.success("mock string");
    }

}
```

## param.required

> 用于标记API参数是否为必须(即不可为空)

#### 默认推荐配置

```
#Support for javax.validation annotations
param.required=@javax.validation.constraints.NotBlank
param.required=@"javax.validation.constraints.NotNull
param.required=@javax.validation.constraints.NotEmpty
```

#### 添加对swagger @ApiParam支持

```
param.required=@io.swagger.annotations.ApiParam#required
```

#### demo

MockCtrl.java

```
@RestController
@RequestMapping(value = "mock")
public class MockCtrl {

    /**
    * Mock String
    */
    @GetMapping("/string")
    public String mockString(
            @ApiParam(value = "seed for mock", required = true, defaultValue = "666666") long seed) {
        return Result.success("mock string");
    }

}
```

#### 导出结果如下:

请求参数:


| 参数名称 |是否必须  |示例  |备注  |
| --- | --- | --- | --- |
| seed |是  |666666  | seed for mock |
