import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/api/index.js'

Vue.use(Vuex)
// 单一状态树
export default new Vuex.Store({
  state: {
    users: [
      {
        "address": {
          "city": "Los Angeles",
          "state": "California",
          "pincode": "123"
        },
        "tags": [
          "music",
          "blog",
          "cricket"
        ],
        "name": "Tom Benzamin"
      },
      {
        "address": {
          "city": "赣州",
          "state": "江西",
          "pincode": "341000"
        },
        "tags": [
          "coding",
          "blogs",
          "cricket"
        ],
        "name": "Horace"
      },
      {
        "address": {
          "city": "九江",
          "state": "江西",
          "pincode": "341000"
        },
        "tags": [
          "coding",
          "swim"
        ],
        "name": "Tracy"
      },
      {
        "address": {
          "city": "赣州",
          "state": "江西",
          "pincode": "341000"
        },
        "tags": [
          "coding",
          "games"
        ],
        "name": "Nally"
      }
    ]
  },
  mutations: {
    setUsers(state, payload) { // 对 state 的写操作处理的唯一的地方
      state.users = payload
    }
  },
  actions: { // 写入状态的第一步
    // 跟 api 通信的地方
    fetchUsers(context) {
      Api.getUsers((users) => {
        console.log(users)
        context.commit('setUsers', users) // 提交 mutation
      })
    },
    queryTag(context, evt) {
      const tag = evt.target.value
      console.log(tag)
      Api
        .getUsersByTag(tag, (users) => {
          context.commit('setUsers', users)
        })
    }
  },
  getters: { // state 的 computed 函数
    users(state) {
      // console.log('users', Object.prototype.toString.call(state.users))
      // return state.users.map((user, index) => {
      //   user.id = user.address.pincode + index
      //   return user
      // })
      return state.users
    }
  },
  modules: {

  }
})
