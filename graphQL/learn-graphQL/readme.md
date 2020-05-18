# GraphQL  
Vue + GraphQL  

- url 文章 posts 查看某一篇文章 /posts/show/1  
  设计不合理  
  RESTFul URL 里不要有动词  
  /posts/1  
  RESTful 是后端暴露资源的解决方案，非常受欢迎，URL 的设计之美  
  1. HTTP 动词  
    GET/POST/DELETE/PATCH/PUT/...等  
  2. 每一个 URL 代表一种资源 /posts/1  
  3. 客户端通过 http 动词，对服务器资源进行操作，实现表现层状态转化  

  设计一个 URL，网上汇款，从账户 1 向账户 2 汇款 500 元  
  资源是什么？发生了什么样的改变？  
  /transaction 交易 -> 独立的模块  
  POST 交易资源的状态转变 from=1&to=2&amount=500.00 -> request body  

- 在近几年来，RESTFul 被前端新的理念革命了 -> GraphQL  
  让前端更好的定义数据接口  不浪费数据，数据格式更加严谨  

  restful 谓语动词，受后端的控制大  
  vuex -> GraphQL(api) -> mockjs -> server RESTFul  
  GraphQL 让前端对数据接口拥有了更大的话语权  

- node 快速支持 import  
  "dev": "nodemon index.js --exec babel-node --presets env"  

- 为什么要有 GraphQL  
  传统的后端接口开发有 restful，但是不太和谐，有沙子，会有不需要的字段冗余  
  GraphQL 通过 schema 严格约束数据的格式，过滤不需要的东西，客户端能够准确地获得它需要的数据，没有任何冗余  

- GraphQL 的操作类型可以是 query、mutation 或 subscription，描述客户端希望进行什么样的操作  
  1. query 查询：获取数据，比如查找，CRUD 中的 R  
  2. mutation 变更：对数据进行变更，比如增加、删除、修改，CRUD 中的 CUD  
  3. substription 订阅：当数据发生更改，进行消息推送  