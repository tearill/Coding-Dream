const Koa = require('koa');
const app = new Koa();
// 中间件
app.use(async(ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
});

app.use(async(ctx, next) => {
  console.log(3);
  // ctx.body = "Hello";
  await next();
  console.log(4);
});

app.use(async(ctx, next) => {
  console.log(5);
  await next();
  console.log(6);
});

app.listen(3000);