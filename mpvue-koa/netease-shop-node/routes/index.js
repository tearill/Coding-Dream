// 路由文件
const router = require('koa-router')({
    prefix: '/lm' // 路由前缀
})
const controllers = require('../controllers')

// 首页相关的接口
router.get('/index/index', controllers.home.index)

// 搜索相关的接口
router.get('/search/indexaction', controllers.search.index.indexAction)
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)

module.exports = router