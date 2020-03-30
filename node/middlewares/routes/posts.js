const Router = require('koa-router')
const router = new Router({
  prefix: '/posts' // 路由前缀
})
const auth = require('../middlewares/auth.js')

router.get('/', async (ctx) => {
  ctx.body = '文章列表'
})

// let isLogin = true
// 先 check 一下有没有登录
// const auth = (ctx, next) => {
//   if (!isLogin) {
//     ctx.redirect('/login')
//   } else {
//     next()
//   }
// } 

// post 中间件，鉴权，可以单独的交给一个中间件去做
router.post('/', auth, async (ctx) => {
  // ctx.body = '登录了吗?'
  // ctx.redirect('/login')
  ctx.body('保存成功')
})

module.exports = router