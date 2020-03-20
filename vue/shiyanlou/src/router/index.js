import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import utils from '@/utils/base.js'

Vue.use(Router)

// 关于路由
// 好像一开始就配置的不合理。
// children 要配合 router-view 来使用这样共用一套公共组件。
// 现在先分开写，等整理完功能再重新配置路由。
// 在这里先写一下构思,以免一会忘记了。
// 看了看语法就开始写了，一直没有整体上的把握。
// Vue 除去配置文件，一开始是从 App.vue 开始的，
// 教程上只在里面写了 <router-view></router-view> 然后开始写各种components 配顶层路由
// 也没多想， Vue 从 App.vue 进来，加载路由 <router-view></router-view>
// 这个router-view 显示的是顶层路由所配置的组件，
// 如果这个组件里也有router-view那应该展示的是children
// children 应该还能再嵌套...

// 封装组件引入，实现延迟加载
const __import__ = file => () => import(`@/pages/${file}.vue`)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: __import__('home'),
      meta: {
        title: '在线做实验，高效学编程 - 实验楼'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        title: '在线做实验，高效学编程 - 关于我们'
      }
    },
    {
      path: '/user/profile', // 用户小家
      name: 'userProfile',
      component: __import__('user/profile/profile'),
      meta: {
        title: '个人设置 - 实验楼',
        login: true // 需要登录
      }
    }
  ]
})
// 路由钩子
router.beforeEach((to, from, next) => {
  document.title = to.meta.title // 设置页面 title
  if (to.meta.login) { // 需要登录的
    // store signon true|false loginSate -> store
    if (!store.state.loginState.sign_on) {
      next({
        path: '/login' // 鉴权
      })
    } else {
      next() // 登录了
    }
  }
  next()   
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router