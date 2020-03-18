// 每个模块中也是四个部分
import shop from '../../api/shop'
const state = {
  all: []
}
const mutations = {
  setProducts(state, products) {
    state.all = products
  }
}
const actions = {
  getAllProducts({ commit }) {
    console.log('getAllProducts')
    // api
    shop
      .getProducts(products => {
        commit('setProducts', products)
      })
  }
}
const getters = {

}

export default {
  namespaced: true, // 命名空间
  state, 
  mutations,
  actions,
  getters
}