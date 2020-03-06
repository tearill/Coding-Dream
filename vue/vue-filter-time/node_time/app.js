const express = require('express')
const config = require('./config')
const mongoose = require('mongoose')
const todo = require('./router/index')
const bodyParser = require('body-parser')
mongoose.connect(config.mongodb)
// 1. port 端口
// 2. 数据库连接
const app = express()

// 中间件，比路由更早去处理 http 请求头数据的收集
// 把传递过来的请求进行处理
app.use(bodyParser.json()) // 来的数据都是二进制流，要变成应用可使用的形式
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/todo', todo)

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
})