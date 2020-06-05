// 二维码 schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QRCodeSchema = new Schema({
  // _id 自动生成
  _alreadyUsed: { // 已经使用过
    type: Boolean,
    default: false
  },
  useId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  scanned: { // 是否扫描
    type: Boolean,
    default: false
  },
  status: { // 二维码的所有状态
    type: Number,
    default: 0
    // 0: 未确定
    // 1: 确定授权
    // -1: 取消授权
  },
  url: String,
  userInfo: {
    type: Object,
    default: {}
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  expireAt: {
    type: Date
  }
})

module.exports = mongoose.model('QRCode', QRCodeSchema);
