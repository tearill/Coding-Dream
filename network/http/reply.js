var http = require('http')

const app = http.createServer(function (req, res) {
  // 1. axios proxy /api/posts 前后端分离 MVVM => text/json
  // 2. 传统给的后端驱动型开发 html mysql + 套页面 MVC => text/html
  let posts = [
    {
      id: '5e8c94a7f265da47a74126d4',
      title: '面试官：怎么排查堆内存溢出呀？'
    },
    {
      id: '5eb7ebea5188256d723151fb',
      title: '「 Dart Js Ts 」给前端工程师的一张Dart语言入场券'
    }
  ]
  if (req.url === '/posts') {
    if (req.headers['content-type'] == 'text/json') {
      res.end(JSON.stringify(posts))
    } else {
      let postHTML = posts.map(post => `
        <li>
          ${post.id} ${post.title}
        </li>
      `).join('')
      res.writeHead(200, {'Content-type': 'text/html;chatset=utf8'})
      res.end(`
        <html>
          <head></head>
          <body>
            <ul>
              ${postHTML}
            </ul>
          </body>
        </html>
      `)
    }
    // res.end('Hello')
  }
})

app.listen(1314, () => {
  console.log('Listening on port 1314')
})