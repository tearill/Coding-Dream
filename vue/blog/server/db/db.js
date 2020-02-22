// 数据库层的分离
module.exports = app => {
    const mongoose = require('mongoose'); // mongodb 驱动
    mongoose.connect('mongodb://localhost:27017/myblog', {
        useNewUrlParser: true
    }); // 发起数据库连接
    
}