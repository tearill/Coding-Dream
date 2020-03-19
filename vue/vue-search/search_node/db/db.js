const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true) // 使用创建索引
mongoose.connect('mongodb://127.0.0.1:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.Promise = global.Promise
const db = mongoose.connection

db.once('open', () => {
  console.log('数据库连接成功')
})

db.on('error', () => {
  console.log('数据库连接失败')
  mongoose.disconnect()
})

module.exports = db