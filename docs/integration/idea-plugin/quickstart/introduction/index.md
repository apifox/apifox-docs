# 介绍

该插件主要用于 IDEA 项目快速生成 API 文档，并同步到 Apifox，代码零入侵。

- 基于 javadoc（Java）、KDoc（Kotlin）、ScalaDoc（Scala） 解析 API 文档。
- 支持 Swagger 注解
- 注意：可以在保持代码零侵入的情况下得到相当完整的 API 文档，但是特殊的需求还是需要部分特殊的注释/注解配合，[注释规范说明](../../advanced-use/annotation-rule/)。
- 该插件基于 [easy-api](https://github.com/tangcent/easy-api) 定制开发，感谢 easy-api 作者

## 功能特性

- 导出 API 文档到 Apifox
- 导出 Markdown 格式 API 文档
- 在 IDEA 中直接发起 API 请求

## 支持项列表

|          | 默认支持                                                                                                                                                                                                                                                    | 额外(配置)支持                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| 语言     | java, kotlin                                                                                                                                                                                                                                                | scala                              |
| web      | [spring](https://spring.io/), [feign](https://spring.io/projects/spring-cloud-openfeign), [jaxrs](https://www.oracle.com/technical-resources/articles/java/jax-rs.html) ([quarkus](https://quarkus.io/) / [jersey](https://eclipse-ee4j.github.io/jersey/)) | [dubbo](https://dubbo.apache.org/) |
| 常用框架 | javax.validation, Jackson, Gson                                                                                                                                                                                                                             | [swagger](https://swagger.io/)     |

## 联系我们

有关 IDE 插件的问题，请加下方微信（备注：IDEA），进内测群沟通交流
<img alt="Apifox 微信群" src="../../../../assets/img/ide-plugin/ide-plugin-contact-wechat.png"/>
