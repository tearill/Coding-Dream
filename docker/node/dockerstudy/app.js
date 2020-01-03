const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const logger = require('koa-logger');
const onerror = require('koa-onerror');
const fs = require('fs');
const bodyparser = require('koa-bodyparser');
// 中间件式
// 分层
const index = require('./routes/index');

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(require('koa-static')(__dirname + '/public'));
// app.use(ctx => {
//     ctx.body = fs.createReadStream('dffaf');
// });

app.use(views(__dirname + '/views', {
    extension: 'pug'
}));

onerror(app); // 错误处理
app.use(logger()); // 访问记录 方便优化和调试

app.use(index.routes(), index.allowedMethods());
// 模块化 COMMONJS
module.exports = app;