# Apifox Linux 版运行方法

## 方式一：命令行打开程序

### 1. 添加可执行权限

    chmod a+x Apifox.AppImage

### 2. 运行

    ./Apifox.AppImage

## 方式二：图形化界面打开程序

### 1. 添加可执行权限

右击“Apifox.AppImage”文件 —> 选择“属性” —> 勾选执行“允许作为程序执行文件”。

### 2. 运行

双击执行“Apifox.AppImage“文件即可运行

## 更多 AppImage 格式使用帮助参考文档

[Ubuntu 如何安装运行.AppImage 文件?](https://www.louishe.com/2019/08/13/doc-4956.html)
[Linux 如何安装运行.AppImage 文件](https://www.jb51.net/LINUXjishu/675717_all.html)

## 常见问题

1. Ubuntu 22.04 安装 appimage 时报错 ，提示 AppImages require FUSE to run.
   解决方案-用以下命令运行：sudo ./包名 xxx.AppImage --appimage-extract-and-run --no-sandbox

2. linux 提示 GPU process isn't usable ,Goodbye.
   运行 export APIFOX_DISABLE_GPU='true' 。再启动试试