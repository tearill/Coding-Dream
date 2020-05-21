import React from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import 'antd/dist/antd.css'
import { Card } from 'antd'
import TodoList from './components/TodoList'
// Apollo graphql 的框架

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql' // 来自于服务器端
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Card style={{ width: '600px', margin: '100px auto' }}>
        <h1>GraphQL Demo</h1>
        <TodoList></TodoList>
      </Card>
    </ApolloProvider>
  );
}

export default App;
