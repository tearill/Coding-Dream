## Egg.js + TS + grapgql + oAuth  
oAuth(第三方登录)  

- egg.js -> Koa 的升级版  
  插件机制  
  graphql API 查询模块  

- config/plugin.ts  
  开启 egg-grapgql  
  ```ts
  graphql: {
    enable: true,
    package: '@switchdog/egg-graphql'
  }
  ```
- config/config.default.ts  
  启动中间件  
  ```ts
  config.middleware = [ 'grapgql' ];
  config.graphql = {
    router: '/graphql',
    app: true, // 加载到agent
    agent: true,
    graphiql: true,
    apolloServerOptions: {
      tracing: true, 
      debug: true
    }
  };
  ```
- schema.graphql  
  对查询建模 schema  
  感叹号 ! 表示字段必需  


- oAuth 第三方登录  
  传统：用户名 + 密码  
  