const mongoose = require('mongoose')
const Schema = mongoose.Schema
// login || register
const userSchema = new Schema({
  "userId": String, // 生成唯一的用户 ID
  "name": String,
  "avatar": String,
  "userName": String,
  "userPwd": String,
  "cartList": [ // 杂糅，兼容前期设计的冗余，移动时代、5G物联网时代数据不规整，动态调整
    {
      "productId": String,
      "productImg": String,
      "productName": String,
      "checked": String,
      "productNum": Number,
      "productPrice": Number
    }
  ],
  "addressList": [
    {
      "addressId": String,
      "userName": String,
      "streetName": String,
      "tel": Number,
      "isDefault": Boolean
    }
  ]
})

const User = mongoose.model('User', userSchema)

module.exports = User