const mongoose = require('mongoose')

// 数据存储(物理需求)是目的，在存储之前要有模型设计(Schema)
const todoSechma = mongoose.Schema({
  title: { type: String, required: true },
  address: String,
  content: String,
  start: { type: Date, default: Date.now() }, // 开始日期
  end: { type: Date, default: Date.now() }, // 结束日期
  created_at: { type: Date, default: Date.now() },
  update_at: { type: Date, default: Date.now() }
})

const Todo = mongoose.model('Todo', todoSechma)

module.exports = Todo

// const Todo = module.exports = mongoose.model('Todo', todoSechma)