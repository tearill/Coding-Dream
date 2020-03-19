const express = require('express')
const search = express.Router()
const PostModel = require('../models/post')
search.get('/:keyword', (req, res) => {
  const keyword = req.params.keyword
  // console.log(keyword)
  // 执行复杂数据查询
  PostModel
    .find({
      $text: {
        $search: keyword
      }
    })
    .exec((err, posts) => {
      res.json(posts)
    })
})

module.exports = search