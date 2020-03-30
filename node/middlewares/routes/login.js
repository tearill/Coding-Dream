const Router = require('koa-router')
const router = new Router({
  prefix: '/login' // 路由前缀
})

router.get('/', async (ctx) => {
  ctx.body = '登录成功'
})

module.exports = router