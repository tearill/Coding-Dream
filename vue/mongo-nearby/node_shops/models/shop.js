const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // 必填
  },
  location: { // location based service || latitude, longitude
    type: [Number], // [120.000, 24.444]
    index: "2d", // 2d 索引
    sparse: true
  }
})

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop