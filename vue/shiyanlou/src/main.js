import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/utils/base.js'
// import Plugins from '@/plugins/index.js'

Vue.config.productionTip = false
Vue.prototype.utils = utils
// Vue.use(Plugins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
