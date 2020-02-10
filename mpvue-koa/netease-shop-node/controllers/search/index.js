const { mysql } = require('../../mysql')

// 获取搜索历史
async function indexAction(ctx) {
    const openId = ctx.query.openId  // 获取url中含带的参数数据(get请求参数)
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
    const { openId, keyword } = ctx.request.body // 拿到get请求的时候传过来的数据 bodyParser
    // console.log(openId, keyword)

    const oldData = await mysql('nideshop_search_history').where({
        'user_id': openId,
        'keyword': keyword
    }).select()

    if (oldData.length === 0) { // 该搜索记录不存在
        const data = await mysql('nideshop_search_history').insert({ // 插入搜索记录
            'user_id': openId,
            'keyword': keyword,
            'add_time': parseInt(new Date().getTime() / 1000)// 转换成时间戳
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

// 清除历史记录
async function clearHistoryAction(ctx) {
    const { openId } = ctx.request.body // 拿到post传过来的数据
    // console.log(openId)
    const data = await mysql('nideshop_search_history').where({
        'user_id': openId
    }).del()
    // console.log(data) // 返回删除的数据条数
    if (data) {
        ctx.body = {
            data: "清除成功"
        }
    } else {
        ctx.body = {
            data: null
        }
    }
}

// 搜索时匹配相关的内容
async function helperAction(ctx) {
    const { keyword } = ctx.query // 拿到get请求参数
    // console.log(keyword)
    var order = ctx.query.order // 排序依据
    if (!order) { // 如果没传排序依据
        order = ''
        orderBy = 'id'
    } else {
        orderBy = 'retail_price'
    }
    const keywords = await mysql('nideshop_goods').orderBy(orderBy, order)
        .column('id', 'name', 'list_pic_url', 'retail_price')
        .where('name', 'like', '%' + keyword + '%').limit(10).select() // 搜索输入之后提示出来的词语
        if (keywords) { // 是否有相关的数据
            ctx.body = {
                keywords
            }
        } else {
            ctx.body = {
                keywords: []
            }
        }
}

module.exports = {
    addHistoryAction,
    indexAction,
    clearHistoryAction,
    helperAction
}