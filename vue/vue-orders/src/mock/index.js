import Mock from 'mockjs'
const Random = Mock.Random

// 假数据生产
// const dataList = [] // 列表数据

// const dataList = {
//   "orders|100": [{ // 生成 100 条
//     "_id|+1": 1, // id 字段从1开始自增
//     "name": "@name", // 随机生成一个姓名
//     "orderDate": "@datetime", // 随机事件
//     "status": "@pick(['complete', 'cancel', 'created'])", // 在三种状态中随机生成
//     "shippingFee": "@float(0, 8, 0, 2)",
//     "total": "@float(8, 100, 0, 2)"
//   }]
// }
const total = 100
const dataList = []

for (let i = 0; i < total; i++) {
  const template = {
    "_id": i + 1,
    "name": Random.name(),
    "orderDate": Random.date(),
    "status": Random.integer(-1, 1),
    "shippingFee": Random.float(0, 8, 0, 2),
    "total": Random.float(10, 100, 0, 2)
  }
  dataList.push(template)
}

// Mock.mock('/api/orders', 'post', dataList) // 模拟在哪个接口请求，请求方式

// Mock 分页
Mock.mock('/api/orders', 'post', (params) => {
  console.log(params, 'params+++')
  const info = JSON.parse(params.body) // 转成 json 格式
  let { page = 1, limit = 20 } = info.params
  console.log(page, limit)
  return {
    total,
    result: dataList.slice((page - 1) * limit, page * limit) // 取出某一页的数据
  }
})

export default Mock