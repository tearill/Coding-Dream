import cookies from 'vue-cookies'
const state = {
  sign_on: cookies.get('session') ? true : false, // 登录 cookie
}

export default {
  namespaced: true,
  state
}