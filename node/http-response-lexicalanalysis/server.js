const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'chunked'
  })
  res.end('OK'.repeat(70000))
})
.listen(8088, () => {
  console.log('Listening on port 8088')
})
