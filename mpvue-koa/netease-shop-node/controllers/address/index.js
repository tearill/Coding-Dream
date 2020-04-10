const { mysql } = require('../../mysql')

// 获取收货地址列表
async function getListAction(ctx) {
  const { openId } = ctx.query
  const addressList = await mysql('nideshop_address').where({
    'user_id': openId
  }).orderBy('is_default', 'desc').select()
  ctx.body = {
    data: addressList
  }
}

// 获取详细地址
async function detailAction(ctx) {
  const { id } = ctx.query
  const detailData = await mysql('nideshop_address').where({
    'id': id
  }).select()
  ctx.body = {
    data: detailData[0]
  }
}

// 添加/修改收获地址
async function saveAction(ctx) {
  const { userName, telNumber, address, detailAddress, checked, openId, addressId } = ctx.request.body
  // 如果是默认选中，先查询是否是默认地址
  if (checked) {
    const isDefault = await mysql('nideshop_address').where({
      'user_id': openId,
      'is_default': 1
    }).select()
    if (isDefault.length > 0) { // 找到默认的
      await mysql('nideshop_address').where({
        'user_id': openId,
        'is_default': 1
      }).update({ // 全部置空
        'is_default': 0
      })
    }
  }
  if (!addressId) { // 通过新建过来的，添加
    const data = await mysql('nideshop_address').insert({
      'name': userName,
      'mobile': telNumber,
      'address': address,
      'address_detail': detailAddress,
      'user_id': openId,
      'is_default': checked == true || checked ? 1 : 0
    })
    if (data) {
      ctx.body = {
        data: true
      }
    } else {
      ctx.body = {
        data: false
      }
    }
  } else { // 修改
    const data = await mysql('nideshop_address').where({
      'id': addressId
    }).update({
      'name': userName,
      'mobile': telNumber,
      'address': address,
      'address_detail': detailAddress,
      'user_id': openId,
      'is_default': checked == 'true' || checked ? 1 : 0
    })
    if (data) {
      ctx.body = {
        data: true
      }
    } else {
      ctx.body = {
        data: false
      }
    }
  }
}

module.exports = {
  getListAction,
  detailAction,
  saveAction
}