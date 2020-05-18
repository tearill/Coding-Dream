// 新的接口
// node 快速支持 import
import express from 'express'
import graphqlHTTP from 'express-graphql';
import schema from './schema' // 模型定义文件

const app = express()
// 数据一定是从数据库里来的
// req -> graphql -> db

// 数据 playground，启动 graphql 服务
app.use('/graphql', graphqlHTTP({
  // 在前端也有像 mongodb schema 严格约定接口
  // 可以给接口定义 schema
  schema,
  graphiql: true // playground
}))

app.get('/', (req, res) => {
  res.end('Hello')
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})
