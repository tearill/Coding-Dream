const BookInstance = require('../models/bookinstance');
// 显示完整的书籍副本列表
exports.bookInstance_list = (req, res, next) => {
    BookInstance.find()
        .populate('book')
        .exec(function (err, list_bookinstances) {
            if (err) { return next(err); }
            // Successful, so render
            res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
        });
};

// 为每位书籍副本显示详细信息的页面
exports.bookInstance_detail = (req, res) => { res.send('未实现：书籍副本详细信息：' + req.params.id); };

// 由 GET 显示创建书籍副本的表单
exports.bookInstance_create_get = (req, res) => { res.send('未实现：书籍副本创建表单的 GET'); };

// 由 POST 处理书籍副本创建操作
exports.bookInstance_create_post = (req, res) => { res.send('未实现：创建书籍副本的 POST'); };

// 由 GET 显示删除书籍副本的表单
exports.bookInstance_delete_get = (req, res) => { res.send('未实现：书籍副本删除表单的 GET'); };

// 由 POST 处理书籍副本删除操作
exports.bookInstance_delete_post = (req, res) => { res.send('未实现：删除书籍副本的 POST'); };

// 由 GET 显示更新书籍副本的表单
exports.bookInstance_update_get = (req, res) => { res.send('未实现：书籍副本更新表单的 GET'); };

// 由 POST 处理书籍副本更新操作
exports.bookInstance_update_post = (req, res) => { res.send('未实现：更新书籍副本的 POST'); };