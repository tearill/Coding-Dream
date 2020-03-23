import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mock from '@/mock' // 为应用引入 mock
// 自己模拟数据
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
