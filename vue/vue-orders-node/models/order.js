const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order