// 路由文件
const router = require('koa-router')({
    prefix: '/lm' // 路由前缀
})
const controllers = require('../controllers')

// 首页相关的接口
router.get('/index/index', controllers.home.index)

// 搜索相关的接口
router.get('/search/indexaction', controllers.search.index.indexAction) // 取出搜索记录和热门搜索
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction) // 添加搜索历史
router.post('/search/clearhistoryAction', controllers.search.index.clearHistoryAction) // 清除搜索历史
router.get('/search/helperaction', controllers.search.index.helperAction) // 搜索提示

module.exports = router