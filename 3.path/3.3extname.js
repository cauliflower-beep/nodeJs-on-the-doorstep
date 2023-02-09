const path = require('path')

// 获取路径中的扩展名
let extName = path.extname("./file/hello...html.txt")
console.log(extName)