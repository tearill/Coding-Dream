const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
  // input: process.stdin,
  // out: process.stdout
  input: fs.createReadStream('./readme.md')
})

rl.on('line', function(lineData) {
  console.log(lineData)
})

// 日志处理
// 逐行读取日志

// 不使用流：先把一个大文件一次性读完，按行切割