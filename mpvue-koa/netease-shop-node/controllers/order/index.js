const { mysql } = require('../../mysql');

async function submitAction(ctx) {
    const { openId, goodsId, allPrice } = ctx.request.body;

    // 判断是否存在订单
    const isOrder = await mysql('nideshop_order').where({
        'user_id': openId
    }).select();
    if (isOrder.length > 0) { // 已经有订单
        const data = await mysql('nideshop_order').update({
            'user_id': openId,
            'goods_id': goodsId,
            'allprice': allPrice
        });
        if (data) {
            ctx.body = {
                data: true
            }
        } else {
            ctx.body = {
                data: true
            }
        }
    } else {
        const data = await mysql('nideshop_order').insert({
            'user_id': openId,
            'goods_id': goodsId,
            'allprice': allPrice
        });
        if (data) {
            ctx.body = {
                data: true
            }
        } else {
            ctx.body = {
                data: true
            }
        }
    }
}

module.exports = {
    submitAction
}