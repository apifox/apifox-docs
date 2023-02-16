# JSON Path 介绍

JSONPath 之于 JSON，就如 XPath 之于 XML。JSONPath 可以方便对 JSON 数据结构进行内容提取。

## 概览

1. 根对象使用`$`来表示，而无需区分是对象还是数组。

2. 表达式可以使用`.`，也可以使用`[]`。如：

   `$.store.book[0].title` 或 `$['store']['book'][0]['title']`

3. 表达式`(<expr>)`可用作显式名称或索引的替代，如：

   `$.store.book[(@.length-1)].title` 表示获取最后一个 book 的 title。

4. 使用符号`@`表示当前对象。过滤器表达式通过语法支持，`?(<boolean expr>)`如：

   `$.store.book[?(@.price < 10)].title ` 表示获取价格小于 10 的所有 book 的 title。

## 语法

#### 要点：

- `$` 表示文档的根元素
- `@` 表示文档的当前元素
- `.node_name` 或 `['node_name']` 匹配下级节点
- `[index]` 检索数组中的元素
- `[start:end:step]` 支持数组切片语法
- `*` 作为通配符，匹配所有成员
- `..` 子递归通配符，匹配成员的所有子元素
- `(<expr>)` 使用表达式
- `?(<boolean expr>)`进行数据筛选

#### JSONPath 语法和 XPath 对比：

| XPath | JsonPath           | 说明                                                                          |
| ----- | ------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------- |
| `/`   | `$`                | 文档根元素                                                                    |
| `.`   | `@`                | 当前元素                                                                      |
| `/`   | `.`或`[]`          | 匹配下级元素                                                                  |
| `..`  | `N/A`              | 匹配上级元素，JsonPath 不支持此操作符                                         |
| `//`  | `..`               | 递归匹配所有子元素                                                            |
| `*`   | `*`                | 通配符，匹配下级元素                                                          |
| `@`   | `N/A`              | 匹配属性，JsonPath 不支持此操作符                                             |
| `[]`  | `[]`               | 下标运算符，根据索引获取元素，**XPath 索引从 1 开始，JsonPath 索引从 0 开始** |
| `     | `                  | `[,]`                                                                         | 连接操作符，将多个结果拼接成数组返回，可以使用索引或别名 |
| `N/A` | `[start:end:step]` | 数据切片操作，XPath 不支持                                                    |
| `[]`  | `?()`              | 过滤表达式                                                                    |
| `N/A` | `()`               | 脚本表达式，使用底层脚本引擎，XPath 不支持                                    |
| `()`  | `N/A`              | 分组，JsonPath 不支持                                                         |

注意：

- JsonPath 的索引从`0`开始计数
- JsonPath 中字符串使用`单引号`表示，例如:`$.store.book[?(@.category=='reference')]`中的`'reference'`

## JsonPath 示例

下面是相应的 JsonPath 的示例，代码来源于[https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/)，JSON 文档如下：

```json
{
  "store": {
    "book": [
      {
        "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "price": 8.95
      },
      {
        "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "price": 12.99
      },
      {
        "category": "fiction",
        "author": "Herman Melville",
        "title": "Moby Dick",
        "isbn": "0-553-21311-3",
        "price": 8.99
      },
      {
        "category": "fiction",
        "author": "J. R. R. Tolkien",
        "title": "The Lord of the Rings",
        "isbn": "0-395-19395-8",
        "price": 22.99
      }
    ],
    "bicycle": {
      "color": "red",
      "price": 19.95
    }
  }
}
```

接下来我们看一下如何对这个文档进行解析：

| XPath                  | JsonPath                                   | Result                                       |
| ---------------------- | ------------------------------------------ | -------------------------------------------- |
| `/store/book/author`   | `$.store.book[*].author`                   | 所有 book 的 author 节点                     |
| `//author`             | `$..author`                                | 所有 author 节点                             |
| `/store/*`             | `$.store.*`                                | store 下的所有节点，book 数组和 bicycle 节点 |
| `/store//price`        | `$.store..price`                           | store 下的所有 price 节点                    |
| `//book[3]`            | `$..book[2]`                               | 匹配第 3 个 book 节点                        |
| `//book[last()]`       | `$..book[(@.length-1)]`，或 `$..book[-1:]` | 匹配倒数第 1 个 book 节点                    |
| `//book[position()<3]` | `$..book[0,1]`，或 `$..book[:2]`           | 匹配前两个 book 节点                         |
| `//book[isbn]`         | `$..book[?(@.isbn)]`                       | 过滤含 isbn 字段的节点                       |
| `//book[price<10]`     | `$..book[?(@.price<10)]`                   | 过滤`price<10`的节点                         |
| `//*`                  | `$..*`                                     | 递归匹配所有子节点                           |

你可以在 [http://jsonpath.com/](http://jsonpath.com/) 站点进行验证 JsonPath 的执行效果。

**参考文档：**

- [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/)
- [https://www.newtonsoft.com/json/help/html/SelectToken.htm](https://www.newtonsoft.com/json/help/html/SelectToken.htm)
