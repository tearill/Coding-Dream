// 围绕状态，设计改变
// user || cartList || products
import {
  RECORD_USERINFO,
  ADD_CRAT,
  INCREMENT_QUANTITY,
  CHECKOUT
} from './mutation-types'
export default {
  // /login { avatar:'', username: '' }
  [RECORD_USERINFO]() {
    state.user_info = info
    state.login = true
  },
  [ADD_CRAT](state, { productId }) {

  },
  [INCREMENT_QUANTITY](state) {

  },
  [CHECKOUT]() {

  }
}