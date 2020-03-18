import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products' // 商品模块的数据管理
import cart from './modules/cart' // 集中模块化管理 cart

Vue.use(Vuex)
// 单一状态树 -> 状态不会有问题
// 树 modules
export default new Vuex.Store({
  state: { // 状态的根节点
    // userInfo: null // 为空 未登录
    userInfo: {
      uid: 10001,
      username: 'Horace'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart, // 当应用复杂起来的时候
    products // 叶节点
  }
})
