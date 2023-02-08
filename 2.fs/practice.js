/*
    练习1.
    使用fs文件系统模块，将素材目录下 grade.txt 文件中的考试数据，整理到grade-ok.txt文件中
    整理前: 小红=99 小白=100 小黄=70 小黑=66 小绿=88
    整理后:
    小红:99
    小白:100
    小黄:70
    小黑:66
    小绿:88
 */
const fs = require('fs')
let gradeOld = ''
let gradeNew = ''
fs.readFile('./grade.txt', 'utf8', function (err, score) {
    // 判断读取成功 todo
    gradeOld = score
    console.log('考试成绩为 gradeOld|', gradeOld)
    // 全局正则匹配可以用 replace(/=/g,':'),就不需要写循环了
    const gradeOldSplit = gradeOld.split(' ')// 切割旧字符串
    console.log(gradeOldSplit)

    const gradeNewSplit = []
    gradeOldSplit.forEach(item => {
        gradeNewSplit.push(item.replace('=', ': '))
    })// 分割后的数组，对每一项数据进行字符串替换操作

    gradeNew = gradeNewSplit.join('\r\n')// 拼接新文本内容
    console.log(gradeNew)

    // 之所以一锅端写在了read的回调里面，是因为外面的gradeNew是空的。todo
    fs.writeFile('./grade-ok.txt', gradeNew, function (err) {
        if (err) {
            console.log("成绩转移失败")
        } else {
            console.log("成绩写入成功")
        }
    })
})


