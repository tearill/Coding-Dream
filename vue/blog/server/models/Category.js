// blog 分类表 Schema 设计
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
        type: String
    }
})

module.exports = mongoose.model('Category', schema, 'categories');