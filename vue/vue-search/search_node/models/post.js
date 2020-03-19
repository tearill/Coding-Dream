const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    index: "text" // 文本索引 支持模糊查询
  }
})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post