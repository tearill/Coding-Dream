# React + Apolo  
- 前端 graphql 介入 API 开发取代 restful  
  可以由前端来定义接口需求  
  react + graphql 提升接口的质量  

  axios 请求的时候  
  服务端查询数据库 -> graphQLHTTP -> /graphql 开启查询 background  
  大公司，server API 为各条业务线提供 API 服务的时候  
  1:n  

1. URL 设计 Restful  
  一切皆资源 名词 + HTTP 动词。Restful 可以抽象的达到网站向用户提供一切资源的抽象  
  虽然前后端有接口文档(swagger egg.js)，但是就像吃花甲一样，后端处理的不干净，吃起来有沙子，graphql 把接口定义的权力交给前端就干净多了，前端定义 schema，要什么就给什么  
