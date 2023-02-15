# Apifox Swagger 扩展

一、指定某个接口所属目录：`x-apifox-folder`

1.  多级目录使用斜杠`/`分隔。其中`\`和`/`为特殊字符，需要转义，`\/`表示字符`/`，`\\`表示字符`\`。

```json
"paths": {
  "/pets": {
     "post": {
         ...
         "operationId": "addPet",     
         "x-apifox-folder": "宠物店/宠物信息"
     }
  }
}
```

Swagger 注解示例：

```CSS
@Operation(extensions = {
    @Extension(properties = {
            @ExtensionProperty(name = "x-apifox-folder", value = "宠物店/宠物信息")})
})
public Response createPet() {...}
```



二、接口状态：`x-apifox-status`

| **状态** | **英文**    |
| -------- | ----------- |
| 设计中   | designing   |
| 待确定   | pending     |
| 开发中   | developing  |
| 联调中   | integrating |
| 测试中   | testing     |
| 已测完   | tested      |
| 已发布   | released    |
| 已废弃   | deprecated  |
| 有异常   | exception   |
| 已废弃   | obsolete    |
| 将废弃   | deprecated  |

```json
"paths": {
    "/pets": {
        "post": {
            ...
            "operationId": "addPet",     
            "x-apifox-status": "released"
        }
    }
}
```



Swagger 注解示例：

```CSS
@Operation(extensions = {
    @Extension(properties = {
            @ExtensionProperty(name = "x-apifox-status", value = "released")})
})
public Response createPet() {...}
```

