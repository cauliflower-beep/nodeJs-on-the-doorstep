const path = require('path')

// 获取路径中的文件名
let fileName = path.basename('./file/hello.txt')
console.log(fileName)
fileName = path.basename('./file/hello.txt','txt')
console.log(fileName)