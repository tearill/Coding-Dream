import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 延迟加载组件 用户切换路由的时候再来加载并显示
const GoodsList = resolve => require(['@/components/GoodList'], resolve)
// 95% 不登录 没必要在首页 / 的时候加载
const Login = () => import('@/components/Login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodsList',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
