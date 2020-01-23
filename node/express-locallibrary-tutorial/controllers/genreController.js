const genre = require('../models/genre');
// 显示完整的类型列表
exports.genre_list = (req, res) => { res.send('未实现：类型列表'); };

// 为每位类型显示详细信息的页面
exports.genre_detail = (req, res) => { res.send('未实现：类型详细信息：' + req.params.id); };

// 由 GET 显示创建类型的表单
exports.genre_create_get = (req, res) => { res.send('未实现：类型创建表单的 GET'); };

// 由 POST 处理类型创建操作
exports.genre_create_post = (req, res) => { res.send('未实现：创建类型的 POST'); };

// 由 GET 显示删除类型的表单
exports.genre_delete_get = (req, res) => { res.send('未实现：类型删除表单的 GET'); };

// 由 POST 处理类型删除操作
exports.genre_delete_post = (req, res) => { res.send('未实现：删除类型的 POST'); };

// 由 GET 显示更新类型的表单
exports.genre_update_get = (req, res) => { res.send('未实现：类型更新表单的 GET'); };

// 由 POST 处理类型更新操作
exports.genre_update_post = (req, res) => { res.send('未实现：更新类型的 POST'); };