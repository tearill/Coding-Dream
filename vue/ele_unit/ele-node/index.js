const express = require('express')
const app = express()
const router = require('./routes/index.js')

// api 服务
const path = require('path')
router(app)

// web 前台 express.static 启用静态服务器
app.use('/', express.static(path.join(__dirname, 'web')))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', express.static(path.join(__dirname, 'admin')))

app.listen("3000", () => {
  console.log('api 服务器上线了')
})