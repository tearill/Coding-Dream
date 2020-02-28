# shopmall

- 路由设计  
  import Home from '../views/Home.vue' --- 立即加载  
  const GoodList = resolve => require(['@/components/GoodList'], resolve) --- 延迟加载  
  返回组件的函数，用来延迟加载，用户切换路由的时候再来加载并显示，降低初始加载的消耗，性能优化  
  首页不用延迟加载直接载入，更快的显示页面给用户  
  - @ 短地址 build/webpack.base.conf.js 中的 alias  
    表示 src  
    可以自己定义  

- 组件延迟加载  
  考点，性能优化，首页不需要那么多组件，返回引入组件的函数用来延迟加载  

- alias  
  Vue 相对地址查找的时候，复杂的项目架构中目录结构有一定的意义，相对路径查找比较麻烦  
  alias 来自于 build/webpack.base.conf.js 中的 alias 配置  
  @ src  
  ~ src/asserts  
  api src/api 接口  
  可以自己进行添加定义  
  > 在 template 里加载静态资源，用别名的绝对路径都要在前面加一个 ~  

- 组件目录架构  
  /goodsDetail 组件比较大，内容很多，不便于维护  
  分成几个父子组件  
  目录 components/goodsDetail  