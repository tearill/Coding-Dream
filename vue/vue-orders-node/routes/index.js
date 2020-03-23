const express = require('express')
const orders = express.Router()
const db = require('../db/db.js')
const Order = require('../models/order.js')

orders.get('/', (req, res) => {
  // res.json({
  //   msg: 'ok'
  // })
  // 总数 -> 分页
  // page limit result
  let { page = 1, limit = 20 } = req.query
  page = parseInt(page)
  limit = parseInt(limit)
  console.log(page, limit)
  // res.json({
  //   page,
  //   limit
  // })
  Order.countDocuments({}, (err, count) => { // count 查询，查总数，独立于列表查询
    if (err) {
      res.json({
        status: 400,
        msg: JSON.stringify(err)
      })
    } else {
      Order
        .find({})
        .skip((page - 1)*limit) // 游标
        .limit(limit) // 取多少条数据
        .sort({
          'orderDate': -1 // 升序排序
        })
        .exec((err, docs) => {
          if (err) {
            res.json({
              status: 400,
              msg: JSON.stringify(err)
            })
          } else {
            res.json({
              status: 200,
              result: docs,
              total: count,
              msg: 'OK'
            })
          }
        })
    }
    // res.json({
    //   count
    // })
  }) 
})

module.exports = (app) => {
  app.use('/orders', orders)
}