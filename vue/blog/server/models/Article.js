// 数据库建表  
// 1. Schema 表设计
// 2. 得到模型对象 --- 抛出
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    title: { // 标题
        type: String
    },
    isTop: { // 是否把文章置顶
        type: Boolean
    },
    summary: { // 总结 显示在文章列表里 --- 介绍
        type: String
    },
    body: { // 文章的内容
        type: String
    },
    categories: [{ // 分类
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category' // 关联 Categoty
    }]
})
// 抛出一个数据库数据的类 --- 操作数据库的时候实例化一条数据进行操作
module.exports = mongoose.model('Article', schema);