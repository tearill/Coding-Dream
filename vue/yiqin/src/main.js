import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import View from './views/View.vue'

// 全局使用路由组件
Vue.use(VueRouter) // 1. 使用路由

Vue.config.productionTip = false

const routes = [ // 路由的规则
  {
    path: '/',
    name: "Home",
    component: Home // 组件
  },
  {
    path: '/about',
    name: "About",
    component: About // 组件
  },
  {
    // 各个省份的路由
    path: '/*', /* 匹配所有 */
    name: 'view',
    component: View
  }
]

const router = new VueRouter({
  mode: 'hash', // 路由的模式
  base: process.env.BASE_URL,
  routes
}) // 生成一个路由对象 --- 因为网站有很多个路径，需要路由对象来统一管理

// 入口 将 Vue 实例化接管页面
// 2. 将 router 放到实例上去
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
