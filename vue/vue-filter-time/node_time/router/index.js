const express = require('express')
const router = express.Router()
const Todo = require('../model/todo')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const moment = require('moment')

router.post('/', (req, res) => {
  console.log(req.body) // 请求体
  // 存时间时，给日期的字符串
  Todo.create(req.body, (err, todo) => { // 创建并插入一条数据
    if(err) {
      res.json(err)
    } else {
      res.json(todo)
    }
  })
})

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  const id = req.params.id
  Todo.findOne({
    "_id": ObjectId(id)
  }, (err, todo) => {
    console.log(moment(todo.start).format('MMMM Do YYYY h:mm:ss a'))
    res.json({
      err,
      todo
    })
  })
})

module.exports = router