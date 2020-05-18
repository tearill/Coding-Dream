import { 
  GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLString,
  GraphQLList
} from "graphql";
import axios from 'axios'
const API_BASE = 'http://localhost:3300'

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    }
  }
})

// 数据不在这里，但是可以定义响应数据的规则
const QueryRootType = new GraphQLObjectType({
  name: 'QueryRoot',
  fields: {
    greeting: {
      type: GraphQLString,
      resolve: () => `Hello` // 响应数据值
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: () => {
        return axios.get(`${API_BASE}/posts`)
          .then(response => response.data)
      }
    }
  }
})

export default new GraphQLSchema({
  query: QueryRootType,
  // mutation
})
