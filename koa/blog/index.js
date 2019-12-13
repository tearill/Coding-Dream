// 单点入口
const Koa = require('koa');
const config = require('./config/default.js');
const app = new Koa();
const views = require('koa-views');
const ejs = require('ejs');
const path = require('path');
const postRouter = require('./routers/posts.js');
const signinRouter = require('./routers/signin.js');
// ? use 应答模式 矿泉水 中间件是处理应用请求的核心
// 启用路由中间件
app.use(
    views(
        path.join(__dirname, './views'), {
            extension: 'ejs'
        }
));
app.use(postRouter.routes());
app.use(signinRouter.routes());
console.log(`listening on port ${config.port}`);
app.listen(config.port);