- koa 是最流行的node轻量级框架
  egg.js 是基于koa的二次开发
- koa new -> app -> listen
  /bin/www 
  www文件就是网站项目的启动文件
  http.createServer(app.callback())
- 模板
  views
  koa-views()
  app.use() 启用views中间件
  声明模板在哪里，使用哪种模板引擎 pug
- 路由 分层
  routes/index.js
  koa-routes()
  可使用 .get post 方法
  index.routes()
  app.use()
- logger 标记和记录访问
  koa-logger 
  use(logger())
- 出错模块
- https://img.bosszhipin.com/
  https://www.zhipin.com/job_detail/1c491d20c1ddd7f50nZ409y6GFY~.html?ka=comp_joblist_5
  静态资源 服务器端资源
  IP 
  静态资源 img.bosszhipin.com
  dns 解析 网络供应商 有一个解析列表(IP对应的网络地址)
  公司会在网络供应商机房里去装一些cdn机器 供应商本地没有的话 去中央服务器里请求一次 缓存到本地
- koa-static
- 表单提交 
  koa-bodyparser
  GET 请求头里 head GET url?a=1&a=2
  POST head url body.length + body 


## node的发布
    docker 容器化

node项目写完后，测试工程师 (环境？)
让项目在不同的机器里面，享用相同的环境跑起来，只要装一个docker