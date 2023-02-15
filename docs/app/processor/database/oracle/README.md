# Oracle 客户端安装

使用 Apifox 连接 Oracle 数据库，需要先下载并安装 [Oracle Instant Client](https://www.oracle.com/database/technologies/instant-client.html) ，下载地址：[https://www.oracle.com/database/technologies/instant-client/downloads.html](https://www.oracle.com/database/technologies/instant-client/downloads.html)



## 安装说明

### Windows 版

1. 下载对应 Windows 版本 Instant Client ZIP 文件，如`instantclient-basic-windows.x64-19.10.0.0.0dbru.zip`。
2. 解压ZIP 文件到指定目录，如： `C:\oracle\instantclient_19_3`。
3. 将上述指定目录添加到环境变量 `PATH` 里（参考文档：[https://jingyan.baidu.com/article/8ebacdf02d3c2949f65cd5d0.html](https://jingyan.baidu.com/article/8ebacdf02d3c2949f65cd5d0.html)）。
4. 重启 Apifox。
5. 更多信息参考[官方文档](https://www.oracle.com/database/technologies/instant-client/downloads.html)。



### macOS 版

1. 下载对应 MacOS 版本 Instant Client ZIP 文件，如`instantclient-basic-macos.x64-19.8.0.0.0dbru.zip`。
2. 解压ZIP 文件到指定目录，如：`~/oracle/instantclient_19_8/`。
3. 运行下方命令将上述指定目录里的 `libclntsh.dylib` 文件软链到 `/usr/local/lib` ：

   ```ln -s ~/oracle/instantclient_19_8/libclntsh.dylib /usr/local/lib```
4. 重启 Apifox。
5. 更多信息参考[官方文档](https://www.oracle.com/database/technologies/instant-client/downloads.html)。



### Linux 版

参考官方文档里的说明：[https://www.oracle.com/database/technologies/instant-client/downloads.html](https://www.oracle.com/database/technologies/instant-client/downloads.html)