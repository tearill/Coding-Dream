const Koa = require('koa')
const { ApolloServer, gql } = require('apollo-server-koa')
const { readFile } = require('./utils')
const cors = require('@koa/cors')
// 前端的 gql 查询不再是 restful 
const typeDefs = gql`
  type TodoItem {
    id: ID
    content: String
    checked: Boolean
  }
  type Query {
    TodoList: [TodoItem!]
  }
`

const resolvers = {
  Query: {
    TodoList: async () => {
      // 数据来源
      const data = await readFile('./mock/index.json')
      const todoList = JSON.parse(data)
      return todoList
    }
  }
}

// apollo graphql 封装
const server = new ApolloServer({
  // schema
  typeDefs, // query
  resolvers
})

const app = new Koa()
server.applyMiddleware({ app })
app.use(cors())

app.listen(3001, () => {
  console.log('Listening on port 3001')
})