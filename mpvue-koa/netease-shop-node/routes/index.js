// 路由文件
const router = require('koa-router')({
    prefix: '/lm' // 路由前缀
})
const controllers = require('../controllers')

router.get('/index/index', controllers.home.index)

module.exports = router