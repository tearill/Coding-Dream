var http = require('http')

http.createServer((req, res) => {
  if (req.url == '/new_page_not_go') {
    res.writeHead(204)
    return
  }
  res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' })
  res.write('Hello')
  res.end(`
    <a href="/new_page_not_go">去新的页面</a>
  `)
})