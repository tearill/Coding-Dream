const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  // 返回 html
  const readStream = fs.createReadStream('./index.html')
  readStream.pipe(res)
}).listen('8080')
