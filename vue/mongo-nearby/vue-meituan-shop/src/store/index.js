import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 数据管理，财务部 node -> api -> vuex(四大家族)
// lbs 应用，经纬度共享
export default new Vuex.Store({
  state: {
    latitude: 115.90531,
    longitude: 28.549066
  },
  mutations: {
  },
  actions: {
  },
  // vuex 应用已经大型化，数据管理也要分库，把大仓库变成小仓库，细化设计
  modules: {
    shops
  }
})
