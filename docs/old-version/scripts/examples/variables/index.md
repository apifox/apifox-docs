# 脚本使用变量

::: v-pre

## 环境变量

```javascript
// 设置环境变量
pm.environment.set('variable_key', 'variable_value');

// 获取环境变量
var variable_key = pm.environment.get('variable_key');

// unset 环境变量
pm.environment.unset('variable_key');
```

#### 环境变量写入

环境变量支持数组、对象、字符串等形式存储

```javascript
var array = [1, 2, 3, 4];
pm.environment.set('array', JSON.stringify(array));

var obj = { a: [1, 2, 3, 4], b: { c: 'val' } };
pm.environment.set('obj', JSON.stringify(obj));
```

读取的时候，需要使用`JSON.parse`转换回来

```javascript
try {
  var array = JSON.parse(pm.environment.get('array'));
  var obj = JSON.parse(pm.environment.get('obj'));
} catch (e) {
  // 处理异常
}
```

## 全局变量

```javascript
// 设置全局变量
pm.globals.set('variable_key', 'variable_value');

// 获取全局变量
var variable_key = pm.globals.get('variable_key');

// unset 全局变量
pm.globals.unset('variable_key');
```

## 临时变量

```javascript
// 设置临时变量
pm.variables.set('variable_key', 'variable_value');

// 获取临时变量
var variable_key = pm.variables.get('variable_key');

// unset 临时变量
pm.variables.unset('variable_key');
```
