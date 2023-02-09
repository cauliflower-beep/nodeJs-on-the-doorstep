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

# 2.fs文件系统模块

## 2.1什么是fs文件系统模块

该模块是nodejs官方提供的、用来操作文件的模块。包含一系列的方法和属性，用来满足用户对文件的操作需求。

常用api:

- fs.readfile()
- fs.writefile()

导入方式：

```javascript
const fs = require('fs')
```

## 2.2路径动态拼接

在使用fs模块操作文件时，如果提供的操作路径是以 ./ 或者 ../ 开头的相对路径时，很容易出现路径动态拼接错误的问题。

原因是在代码运行的时候，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径。

案例见 2.3path,

# 3.path路径模块

## 3.1什么是path路径模块

path 模块是NodeJs官方提供的、用来处理路径的模块。提供了一系列的方法和属性，用来满足用户对路径的处理需求。

常用api:

- path.join()——将多个路径片段拼接成一个完整的路径字符串
- path.baseame()——从路径字符串中，将文件名解析出来
- path.extname——获取路径中的扩展名

同样的使用 path 处理路径，需要先行导入：

```javascript
const path = require('path')
```





