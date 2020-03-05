import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import router from './router'

Vue.config.productionTip = false
// 全局声明过滤器
Vue.filter('format_date', function format_date(value) {
  // const date = new Date(value);
  // return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
