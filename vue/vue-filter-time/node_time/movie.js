const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  poster: String, // 封面 url
  rating: String, // 比分
  introduction: String,
  created_at: { // 创建的时间
    type: Date,
    default: Date.now
  },
  uodate_at: { // 更新的时间
    type: Date,
    default: Date.now
  }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie