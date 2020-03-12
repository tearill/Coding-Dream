const express = require('express')
const user = express.Router()
const db = require('../db/db.js') // 连接数据库
const User = require('../models/user.js')

user.get('/', (req, res) => {
  User
    .find({})
    .exec((err, users) => {
      res.json(users)
    })
})

user.get('/tag/:tag', (req, res) => {
  const tag = req.params.tag
  console.log(tag, '-----tag from node')
  User
    .find({ tags: tag })
    .exec((err, users) => {
      res.json(users)
    })
})

// module.exports = (app) => {
//   app.use('/users', router)
// }

module.exports = user