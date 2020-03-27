const elasticsearch = require('elasticsearch')
const users = require('./users.json')

const client = new elasticsearch.Client({
  host: ['http://localhost:9200'] // 分布式
})

client.ping({ // 测试连接
  requestTimeout: 30000
}, function(err) {
  if (err) {
    console.err('ElasticSearch cluster si down!')
  } else {
    console.log('Everything is OK')
  }  
})

// 索引，只能创建一次 相当于 mongodb collection
// client.indices.create({
//   index: "juejin"
// }, function(error, response, status) {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('create a new index', response)
//   }
// })

var bulk = [] // 每个索引拥有的数据是一个 bulk(单位)
users.forEach(user => {
  bulk.push({
    index: { // 给数据添加索引
      _index: "juejin",
      _type: "users_list"
    }
  })
  bulk.push(user)
})

client.bulk({ body:bulk }, function(err, response) {
  if (err) {
    console.log("Failed Bulk operation".red, err)
  } else {
    console.log(response)
  }
})