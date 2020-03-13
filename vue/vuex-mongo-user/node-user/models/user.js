const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  "address": {
    "city": {
      type: String
    },
    "state": {
      type: String
    },
    "pincode": {
      type: String
    }
  },
  "tags": [
    { 
      type: String,
      index: true // 给字段添加简单索引
    }
  ],
  "name": { type: String }
})

// userSchema.

const User = mongoose.model('User', userSchema)

module.exports = User