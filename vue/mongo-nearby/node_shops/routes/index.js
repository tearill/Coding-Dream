const express = require('express')
const shop = express.Router()
const db = require('../db/db.js')
const Shop = require('../models/shop.js')

// 1. NOSQL 
// 2. 天生迎合移动时代，定位功能

shop.get('/', async(req, res) => {
  Shop
    .find({
      location: {
        $near: [114.946952,25.854942], // $ -> mongodb 里的函数
        $maxDistance: 0.2 // 10 公里 -> 1
      }
    })
    .limit(10) // mongodb 默认查出20条 limit 限制查询结果条数
    .exec(function(err, shops) {
      if(err) {
        console.log(err)
      }
      res.json(shops)
    }) 
})

shop.post('/', async(req, res) => {
  const bsk = new Shop({
    name: '海底捞(步步高店)',
    location: [114.946952,25.854942]
  })
  bsk
    .save((err, saved) => {
      res.json({
        status: 1
      })
    })
})

module.exports = (app) => {
  app.use('/shops', shop)
}