# MySQL 使用问题

目前，最新的 mysql 模块并未完全支持 MySQL8 的`caching_sha2_password`加密方式，而`caching_sha2_password`在 MySQL8 中是默认的加密方式。

因此，请使用需要指定`mysql_native_password`模式的方式修改 MySQL 账号密码，使用其他工具连接 MySQL，然后运行如下 SQL 修改对应账号的密码：

```sql
ALTER USER 'username'@'%' IDENTIFIED WITH mysql_native_password BY '123456'
```

注意：请将上面的`username`修改为你需要设置的`用户名`，`123456`改成你需要设置的`密码`

