# 32.2K Vue 应用  

## Vue 整栈开发  
  Vue 单页应用 + node 做 api + 后台(admin)   

后台  
element
- 登录  
  后台是给编辑 特效 讨好 做一个用户体验  
  Vue false -> true  
  `<transition>`   
  + 进场 false -> true (就像春晚上场一句想死你们了) 暖场 v-enter 短暂时间，在元素插入之前生效，在插入的下一帧后移除  
  + form-fade-enter-active 在进入的过程之中，也就是 transition 的时间
  + form-fade-enter -> .form-fade-enter-active(1s)  
  + 出场 true -> false  
    form-fade-leave 离开的状态 存在一帧  
  + form-fade-leave-active 离开   
  
  总结：  
  transition-name-enter(只存在一帧的时间) -> transition-name-enter-active 子元素原来的样式  
  transition-name-enter 未进入的时候的样式  
  transition-name-enter-active 设置 transition 时间  
  退场 transtion-name-leave-active  

- Vue 中的跨域处理 --- 使用 proxy 代理  
  vue.config.js 配置 devServer 设置代理  
  ```js
  module.exports = {
    devServer: {
      // 127.0.0.0.1:8000/api/admin/login
      proxy: { // 代理
        '/api': {
          // 转发到 http://127.0.0.0.1:3000
          target: 'http://127.0.0.1:3000',
          changeOrigin: true, // 换源
          pathRewrite: {
            '^/api': '' // 去掉 api 变成 http://127.0.0.0.1:3000/admin/login
          }
        }
      }
    }
  }
  ```