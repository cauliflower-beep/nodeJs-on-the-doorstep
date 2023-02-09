const path = require('path')

const addr = path.join('/a','/b/c','../','./def','g')
console.log(addr)

const addr2 = path.join(__dirname,'./files/hello.txt')
console.log(addr2)