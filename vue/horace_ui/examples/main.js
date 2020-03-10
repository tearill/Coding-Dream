import Vue from 'vue'
import App from './App.vue'
import horaceui from '../packages'

Vue.use(horaceui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
