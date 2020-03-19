import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // rootState
    login: false, // 是否登录
    userInfo: null, // 头像 昵称
    products: {}, // 商品
    cartList: [], // 购物车
    // user,
    // cart,
    // products
  },
  // mutations: {

  // },
  // actions: {

  // }
})
