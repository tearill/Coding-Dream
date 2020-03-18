// 每个模块中也是四个部分
const state = {
  items: [],
  checkoutStatus: null
}
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  increseItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id) // 找到相应的商品
    cartItem.quantity++
  }
}
const actions = {
  addProductToCart({ commit }, product) {
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('increseItemQuantity', cartItem)
      }
    }
    // console.log(payload)
    // 购物车里有 -> 数量+1 购物车里没有 -> 添加该商品
    // return state.items.map(({ id, quantity }) => {
      // const product = rootState.products.all.find(product => product.id === id) // 根节点
    //   return {
    //     title: products.title,
    //     price: products.price
    //   }
    // })
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