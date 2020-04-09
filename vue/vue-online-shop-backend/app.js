const express = require('express');
const path = require('path');
const createError = require('http-errors'); // 错误中间件处理
const cookieParser = require('cookie-parser'); // 方便操作客户端中的 cookie 值 
const logger = require('morgan'); // http 请求的日志中间件
const mongoose = require('mongoose'); // 引入 mongoose

const indexRouter = require('./routes/index'); // 首页路由
const usersRouter = require('./routes/users'); // 用户路由
const apiRouter = require('./routes/api'); // api 接口路由

const app = express();

// 模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 连接数据库
mongoose.connect(`mongodb://localhost:27017/test`);

app.use(logger('dev')); // 日志
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // false 使用 querystring 模块解析主体
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1', apiRouter); // 中间件 --- 总路由

// 404 捕获
app.use(function (req, res, next) {
  next(createError(404));
});

// 处理错误
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
