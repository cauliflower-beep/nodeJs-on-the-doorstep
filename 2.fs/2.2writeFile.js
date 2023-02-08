/*
    向指定的文件路径中写入内容
 */
const fs = require('fs')
fs.writeFile('./hello.txt',"hello node!",function (err) {
    console.log(err)    // 默认以utf8的编码写入文件
})

// 判断文件是否写入成功
fs.writeFile('e:/hello.txt',"hello node!",function (err) {
    if (err){
        console.log("文件写入失败|",err)
    }else {
        console.log("文件写入成功!")
    }
})