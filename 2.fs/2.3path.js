const fs = require('fs')

/*
    如果是在 nodejs-basic 目录下执行的 node ./fs/2.3path.js
    文件路径就会被拼接成 ../nodejs-basic/Do not go gentle into that good night.txt（以node命令执行的目录为基础进行拼接）
    进而导致路径错误而读取失败
    这就是所谓的 “动态路径拼接”
    为了解决路径问题，直接用绝对路径读取即可.缺点就是移植性较差，不利于维护
 */
fs.readFile('./Do not go gentle into that good night.txt','utf8',function (err,dataStr){
    if (err){
        console.log("文件读取错误|",err)
    }else{
        console.log("文件读取成功|",dataStr)
    }

})

/*
    为了兼顾移植性与可维护特性，可以采取 __dirname 拼接的方式进行
    __dirname 表示当前文件所处的目录
 */
fs.readFile(__dirname + "/Do not go gentle into that good night.txt",'utf8',function (err,dataStr) {
    if (err){
        console.log("文件读取失败|",err.path)
    }else{
        console.log("文件读取成功|",dataStr)
    }
})