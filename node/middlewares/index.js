const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
// const sayHelloCN = async (ctx) => {
//   ctx.body = '你好！'
// }
const logger = async (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  await next()
}
// 打印日志 log
app.use(logger)
// 发送表单的处理
app.use(bodyParser()) // 内部的代码 await
// 返回 hello
// 向用户响应 hello，web 服务
// const sayHello = async (ctx) => {
//   ctx.body = 'hello' // 响应体
// }
// Vue.use()
// 显示顺序和代码顺序相关
// app.use(sayHelloCN)
// app.use(sayHello) // 启用一个中间件服务
// req, ctx.req 
app.use(async (ctx) => {
  // context 上下文 跳转，报错
  // 得到表单传过来的数据
  console.log(ctx.request.body)
  // 向发出请求的用户返回在请求时 form 里的数据
  ctx.body = ctx.request.body // ctx.request -> req | ctx.body -> res
})

app.listen(3000)