import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "goods" */ '../views/Goods.vue')
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "goods" */ '../views/Goods.vue')
  },
  {
    path: '/ratings',
    name: 'Ratings',
    component: () => import(/* webpackChunkName: "ratings" */ '../views/Ratings.vue')
  },
  {
    path: '/seller',
    name: 'Seller',
    component: () => import(/* webpackChunkName: "seller" */ '../views/Seller.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
