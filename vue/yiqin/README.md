# Vue 疫情地图  

## vue-cli 和 Vue

- vue-cli 有别于 Vue  
  vue-cli 是用于 Vue 全家桶开发的一个命令行工具  
  1. Vue 全家桶  
     Vue 框架，周边有一些工具  
     vue-cli 是用来开发单页应用的命令工具  
     根据 url 的变化显示不同的页面  
  2. 组件化思维开发页面  
     main.js --- 入口文件 -> 将 App.vue 挂载 -> 其他组件  
     #app 在 public/index.html 中  
     - public/index.html --- 首页模板  
       main.js 页面被 Vue 接管 App.vue 组件 -> 脚手架编译成 js 塞到 public/index.html，以 js 的形式放入 Vue  

- vue-cli 写 Vue 最终还是以 html、css、js 的形式展示出来  
  npm run serve 访问的是 public/index.html  
  也可以使用 npm run build -> 生成 html、css、js 的形式 -> live-server  

## 如何实现不同城市疫情的查看  

- 单页面应用 --- SPA --- Single Page Application  
  同一个页面，点击显示不同的内容  
  热更新，路由更新，显示不同的内容  
  路由 url 改变，页面只有部分更新，整个网站都是一个页面  

- main.js --- 入口 new Vue()  
- VueRouter 补全 Vue 生态，router 的职责  
- App.vue  

- 全家桶 vue-router  
  1. 引入 vue-router --- import VueRouter from 'vue-router'
  2. 使用路由 --- Vue.use(VueRouter)
  3. 实例化路由对象 --- const router = new VueRouter
  4. 建立路由匹配对象 --- const routes = []
  5. 将 router 放到实例上：

     ```js
     new Vue({
       router,
       render: h => h(App),
      }).$mount('#app')
     ```

- router-link  
  在单页应用中不用 a 标签，router-link 代替 a 标签  

## 如何实现一个路由匹配规则匹配所有的城市  

- 城市数量很多，如果要把每个城市的路由都写一遍会很多  

- 使用贪心匹配 --- 一次性匹配所有的路由  
  
  ```js
  {
    // 各个省份的路由
    path: '/*', /* 匹配所有 */
    name: 'view',
    component: View
  }
  ```  
  