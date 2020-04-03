# Node middlewares 中间件  

node POST /posts { title, body } 文章  
RESTFUL 新增文章  
登录  
未登录，直接访问 /post -> /login  
1. 前端  
   路由首位 Vue router -> beforeRouteEnter  
   axios 拦截所有的请求 /posts /admin /api 配置  
2. 后端  
   koa express -> http 请求头  
   POST -> 请求 /post -> 后端也有跳转 http 302 /login  
   ctx.redirect('/login) // 302  

- 中间件 middlewares -> 函数  
  koa express 的服务是通过 middlewares 来提供的  
  洋葱图  
  从请求进来到请求出去中间的过程  

- node 的框架，以中间件(函数)来构成 web 服务，为用户提供服务，是 node 开发的核心  

- middlewares 可以有很多，是有访问顺序的  
  像洋葱一样，一层层进去 提前退出  
  每个用户进来访问 req http://localhost:3000/  
  (很多很多层去提供中间的状态服务)  
  用中间件去服务 res  

- ctx.body = ctx.request.body -> 拿不到数据，空的  
  表单数据到达是异步，慢慢到达的  
  开启 koa-bodyparser 对表单进行处理  

- 中间件的 next  
  不启用 next 的话，中间件的处理不会继续往下走  

- 中间件的洋葱模型  
  一层一层的调用 next，走到最后的时候没有遇到出口，会进行回流，重新向前执行  
  栈数据结构，next 之前是一直入栈，入栈结束没有出口，会回流(出栈)  

- 中间你是怎么用的？觉得对它深入理解了  
  回答：比如在发文章前，要先 check 是否登录了，不写到 /posts 中间件中，而是单独的放到 auth 中间件专门用来鉴权，单独编写，分离到 middlewares 目录，node 架构中从此多了一个 middlewares 层，便于解耦和复用  
  然后在路由进入之前启用 require 并且 use 启用中间件，进行鉴权  