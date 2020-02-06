const { mysql } = require('../../mysql')

// 获取搜索历史
async function indexAction(ctx) {
    const openId = ctx.query.openId  // 获取url中含带的参数数据
    // 默认关键字
    const defaultKeyword = await mysql('nideshop_keywords').where({
        is_default: 1
    }).limit(1).select()
    // 取出热门关键字
    const hotKeywordList = await mysql('nideshop_keywords').distinct('keyword')
        .column('keyword', 'is_hot').limit(10).select()

    const historyData = await mysql('nideshop_search_history').where({
        user_id: openId
    }).limit(10).select()

    ctx.body = {
        'defaultKeyword': defaultKeyword[0],
        'hotKeywordList': hotKeywordList,
        'historyData': historyData
    }
}


// 添加搜索历史
async function addHistoryAction(ctx) {
    const { openId, keyword } = ctx.request.body // 拿到请求的时候传过来的数据

    const oldData = await mysql('nideshop_search_history').where({
        'user_id': openId,
        'keyword': keyword
    }).select()
    if (oldData.length === 0) {
        const data = await mysql('nideshop_search_history').insert({
            'user_id': openId,
            'keyword': keyword,
            'add_time': parseInt(new Data().getTime() / 1000)// 转换成时间戳
        })
        if (data) {
            ctx.body = {
                data: 'success'
            }
        } else {
            ctx.body = {
                data: 'fail'
            }
        }
    } else {
        ctx.body = {
            data: '已经有记录了'
        }
    }
}

module.exports = {
    addHistoryAction,
    indexAction
}