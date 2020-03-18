import shop from "../../api/shop"

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
  },
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },
  setCartItems(state, { items }) {
    state.items = items
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
      // 向 products 模块下提交 mutation || root: true -> 先回到根节点，再往 products 下走
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
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
  },
  checkout({ commit }, products) {
    // console.log(products)
    const savedCartItem = [...state.items] // 整个购物车的商品 -> 提前保存一份确保失败回滚的时候还能拿到
    commit('setCheckoutStatus', null)
    commit('setCartItems', { items: [] }) // 重置购物车为空
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'), // success
      () => { // error
        commit('setCheckoutStatus', 'failed')
        commit('setCartItems', { items: savedCartItem })
      } 
    )
  }
}
const getters = {
  cartProducts(state, getters, rootState) {
    // 穿梭到 products -> state.all
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find( // 从树根开始找到 products
        product => product.id === id
      )
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice(state, getters) { // 总价
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

export default {
  namespaced: true, // 命名空间
  state, 
  mutations,
  actions,
  getters
}