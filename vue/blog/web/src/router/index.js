import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Article from '../views/Article.vue'
import Tag from '../views/Tag.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main', // 首页/列表页
    name: 'main',
    component: Main
  },
  {
    path: '/article/:id', // 文章页 动态路由
    name: 'article',
    component: Article
  },
  {
    path: '/tag', // 每个分类下有多少文章
    name: 'tag',
    component: Tag
  },
   {
     path: '/about', // 关于
     name: 'about',
     component: About
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
