// 借助 webpack 编译转换
import express from 'express';
import React from 'react'; // 只要使用了 jsx 就要引入 react
// client 渲染成 dom | server 渲染成字符串
import { renderToString }  from 'react-dom/server';
import Header from '../components/Header.jsx';

const app = express();
// 把 static 目录做了静态资源映射 => 通过 url 访问静态资源
app.use(express.static('static'));

app.get('*', (req, res) => {
  // 入口组件 jsx
  const App = (<Header />);
  // jsx -> babel -> React-createElement()
  const htmlStr = renderToString(App); // 渲染成字符串
  console.log(htmlStr);
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <!-- root ReactDOM.render -->
    <div id="root">
      ${htmlStr}
    </div>
    <!-- 请求 localhost:3000/index.js => 前端的打包代码 -->
    <!-- hydrate 绑定事件 -->
    <script src="/index.js"></script>
  </body>
  </html>
  `);
  // res.send(``)
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
