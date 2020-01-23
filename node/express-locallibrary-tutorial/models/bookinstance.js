const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const BookInstanceSchema = new Schema({
    // 指向藏书的引用
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    // 出版项
    imprint: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['可供借阅', '馆藏维护', '已借出', '保留'],
        default: '馆藏维护'
    },
    due_back: {
        type: Date,
        default: Date.now
    }
});

// 虚拟属性url：藏书副本url
BookInstanceSchema
    .virtual('url')
    .get(function () {
        return '/catalog/bookinstance' + this._id;
    });

BookInstanceSchema
    .virtual('due_back_formatted')
    .get(function () {
        return moment(this.due_back).format('MMMM Do, YYYY');
    });

// 导出 BookInstance 模型
module.exports = mongoose.model('BookInstance', BookInstanceSchema);