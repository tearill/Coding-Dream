const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  // 返回 html
  // 把文件读出来再把内容写回去
  fs.readFile('./index.html', 'utf8', (err, info) => {
    res.end(info)
  })
}).listen('8080')
