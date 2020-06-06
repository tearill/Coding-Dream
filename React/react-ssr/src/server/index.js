// 借助 webpack 编译转换
import express from 'express';
import React from 'react'; // 只要使用了 jsx 就要引入 react
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// client 渲染成 dom | server 渲染成字符串
import { renderToString } from 'react-dom/server';
import Header from '../components/Header.jsx';
import Routes from '../Routes';
import { getClientStore } from '../store/index'


const app = express();
const store = getClientStore();
// 把 static 目录做了静态资源映射 => 通过 url 访问静态资源
// koa-static
app.use(express.static('static'))
// ejs jsp jade vue-template:  if for 
app.get('*', (req, res) => {
  console.log(req.url);
  // 入口组件 jsx  context
  const App = (
    <Provider store={store}>
      <StaticRouter location={req.url}>
        { renderRoutes(Routes) }
      </StaticRouter>
    </Provider>
  );
  // jsx -> babel -> React-createElement()
  const htmlStr = renderToString(App);
  console.log(htmlStr);
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${htmlStr}</div>
    <script src="/index.js"></script>
    <script>
    const global = {a: 1, b: 2}
    </script>
  </body>
  </html>`);
})

app.listen(3000, () => {
  console.log('server is running 3000 port');
})