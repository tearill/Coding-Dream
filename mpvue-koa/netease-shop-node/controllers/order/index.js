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

async function detailAction(ctx) {
    const { openId, addressId } = ctx.query;
    const orderDetail = await mysql('nideshop_order').where({
        'user_id': openId
    }).select();

    var goodsIds = orderDetail[0].goods_id.split(',')
    const list = await mysql('nideshop_cart').andWhere({
        'user_id': openId
    }).whereIn('goods_id', goodsIds).select();

    // 收货地址
    var addressList;
    if (addressId) {
        addressList = await mysql('nideshop_address').where({
            'user_id': openId,
            'id': addressId
        }).orderBy('is_default', 'desc').select();
    } else {
        addressList = await mysql('nideshop_address').where({
            'user_id': openId
        }).orderBy('is_default', 'desc').select();
    }

    ctx.body = {
        price: orderDetail[0].allprice,
        goodsList: list,
        address: addressList[0] || {}
    }
}

module.exports = {
    submitAction,
    detailAction
}