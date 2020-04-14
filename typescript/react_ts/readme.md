# react ts  
`webpack-dev-server` 开发阶段，webpack 编译同时启动类似 live-server 的 http 服务  
`webpack` 编译  

1. --inline --hot  
  热更新，让页面做到局部更新，不用丢失组件状态 MVVM  
  Vue mounted data  
2. hash 是什么  
  文件版本，app.[hash].js demo.[hash].css  
  静态文件会缓存，app.[hash].js old -> new，加一个 hash 实现缓存更新  
  app.[hash].js?3 old -> new ?后面跟上版本号  
3. babelrc presets env modules  
4. entry 多入口的作用？  
  entry 从某个文件 require import  
  单点入口，找到一个入口进去一直走，组织起来一个依赖关系  
  业务代码是要经常改变的，有 hash 的需要 -> 通知客户端更新  
  把几个月，永远不更新的文件(框架、第三方库等等)作为独立的入口单独打包，后面访问的时候就不用再下载，加快访问速度  
  (面试题：entry 可以有多个打包入口吗？为什么？)  
  依赖网 -> 单独的关系链 -> 单独的入口  
  vendor -> 库 Vue Vuex Vue-router  
  提升编译速度  同时保障及改善了用户浏览体验，利用缓存  
5. tsx 在工作流里是如何完成编译支持的  
  在 webpack -> resolve -> extension 中支持 tsx 文件  
  test -> `/\.tsx?/` -> awesome-typescript-loader -> tsconfig.json -> react -> babel  
  jsx 良好表现的 template 语法  

- dist 目录不删除？  
  把历史版本都留下，利于回滚代码  