import Mock, { Random } from 'mockjs'

// 假数据生产
// const dataList = [] // 列表数据

const dataList = {
  "orders|100": [{ // 生成 100 条
    "_id|+1": 1, // id 字段从1开始自增
    "name": "@name", // 随机生成一个姓名
    "orderDate": "@datetime", // 随机事件
    "status": "@pick(['complete', 'cancel', 'created'])", // 在三种状态中随机生成
    "shippingFee": "@float(0, 8, 0, 2)",
    "total": "@float(8, 100, 0, 2)"
  }]
}

Mock.mock('/api/orders', 'post', dataList) // 模拟在哪个接口请求，请求方式

export default Mock