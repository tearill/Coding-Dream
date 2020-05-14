const fs = require('fs')
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  if (req.url === "/file" && req.method.toLowerCase() === "post") {
    parseFile(req, res) // 文件解析
  } else {
    fs.createReadStream('./index.html').pipe(res)
  }
})

function parseFile(req, res) {
  req.setEncoding("binary")
  let body = ""
  let fileName = ""
  // 拿到请求头中的边界字符
  // Content-type: multipart/form-data, boundary=AaB03x
  let boundary = req.headers['content-type']
    .split('; ')[1]
    .replace("boundary=", "")

  req.on("data", function (chunk) {
    body += chunk
  });
  req.on("end", function () {
    // 只处理单个文件 jpeg
    let lines = body.split('\r\n\r\n')
    let end = lines[1].indexOf('--' + boundary + '--') - 2
    let binary = lines[1].substring(0, end)
    fs.writeFile('upload.jpg', binary, {encoding: 'binary'}, (err) => {
      if (err) console.log(err)
    })
    console.log(lines[1].indexOf('--' + boundary + '--') - 2)
    // 按照边界字符切分
    res.end('ok')
  })
}

server.listen(7787)
