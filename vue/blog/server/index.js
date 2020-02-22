const express = require('express');
const app = express();
// 将 db.js 引入 
require('./db/db')(app); // 数据库的连接
// 把打包好的 Vue 静态文件拿过来显示
app.use('/', express.static(__dirname + '/web')) // express 提供的静态服务 将静态资源显示

app.listen('3000', async(req, res) => {
    console.log('http://localhost:3000');
})