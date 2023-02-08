/*
    以utf8的编码格式，读取指定文件的内容，
    并打印err 和 dataStr 的值
 */
const fs = require('fs')
fs.readFile('./Do not go gentle into that good night.txt','utf8',function (err,dataStr){
    console.log(err) // err为错误对象 表示失败之后的结果 成功读取的话就是null
    console.log('------')
    console.log(dataStr)
})

// 判定文件是否读取成功
fs.readFile('./readme.md','utf8',function (err,dataStr){
    if (err){
        console.log("文件读取失败|",err.message)
    }else {
        console.log("文件内容|",dataStr)
    }
})