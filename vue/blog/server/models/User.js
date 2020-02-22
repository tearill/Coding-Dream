// blog 分类表 Schema 设计
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String,
        select: false, // 获取用户数据的时候，不要把密码取出去 --- 只有 insert 和 update 的需要
        set(val) { // insert 操作时设置 password
            return bcrypt.hashSync(val, 10) // 使用 hash 加密 不以明文存储
        }
    }
})

module.exports = mongoose.model('User', schema, 'users');