# 1.初识node

## 1.1node是什么？

nodejs是一个基于chrome V8引擎的javaScript的运行环境。是一个后端运行环境。

与之相对的，浏览器是一个前端运行环境。

V8引擎解析的效率是很高的。

![img](imgs\20210608164445150.png)

如图所示，nodejs是一个独立的运行环境，无法调用DOM和BOM及ajax等浏览器内置的api.

## 1.2nodejs可以做什么？

nodejs作为一个js的运行环境，仅仅提供了基础的功能和api。

然而，基于nodejs提供的这些基础功能，大量的工具和框架层出不穷，所以学会了nodejs，可以让前端程序员胜任更多的工作和岗位。

- 基于Express，可以快速构建web应用
- 基于Electron，可以构建跨平台的桌面应用
- 基于restify，可以快速构建api接口项目
- 读写和操作数据库、创建实用的命令行工具辅助前端开发
- etc...

## 1.3nodejs学习路径

js基础语法 + nodejs内置api模块(fs/path/http等) + 第三方api模块(express/mysql等)

