const { mysql } = require('../../mysql');

// 获取分类列表，导航栏
async function categoryNav(ctx) {
  const categoryId = ctx.query.id;
  // 获取分类
  const currentNav = await mysql('nideshop_category').where({
    'id': categoryId
  }).select()
  console.log(currentNav, '--------');
  // 其他的分类
  const navData = await mysql('nideshop_category').where({
    'parent_id': currentNav[0].parent_id
  }).select()
  ctx.body = {
    navData,
    currentNav: currentNav[0]
  }
}

// 分类页面
async function indexAction(ctx) {
  const { id: categoryId } = ctx.query
  const data = await mysql('nideshop_category').where({
    'parent_id': 0
  }).select()
  const currentCategory = []
  if (categoryId) {
    currentCategory = await mysql('nideshop_category').where({
      'parent_id': categoryId
    }).select()
  }

  ctx.body = {
    'categoryList': data
  }
}

// 当前分类对应的商品
async function currentAction(ctx) {
  const { id: categoryId } = ctx.query
  const data = {}
  // 当前导航
  const currentOne = await mysql('nideshop_category').where({
    'id': categoryId
  }).select()
  // 对应商品
  const subList = await mysql('nideshop_category').where({
    'parent_id': currentOne[0].id
  }).select()
  data.currentOne = currentOne[0]
  data.currentOne.subList = subList
  ctx.body = {
    data
  }
}

module.exports = {
  categoryNav,
  indexAction,
  currentAction
}