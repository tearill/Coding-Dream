# 32.2K Vue 应用  

## Vue 整栈开发  
  Vue 单页应用 + node 做 api + 后台(admin)   

后台  
element-ui  
### 登录  

- 后台是给编辑 特效 讨好 做一个用户体验  
  Vue false -> true  
  `<transition>`   
  + 进场 false -> true (就像春晚上场一句想死你们了) 暖场 v-enter 短暂时间，在元素插入之前生效，在插入的下一帧后移除  
  + form-fade-enter-active 在进入的过程之中，也就是 transition 的时间
  + form-fade-enter -> .form-fade-enter-active(1s)  
  + 出场 true -> false  
    form-fade-leave-to 离开的状态 存在一帧  
  + form-fade-leave-active 离开   
  
  总结：  
  v-enter(只存在一帧的时间) -> transition-name-enter-active 子元素原来的样式  
  v-enter 未进入的时候的样式  
  v-enter-active 设置 transition 时间  
  退场 v-leave-active  
  v-enter：进入过渡的开始状态，元素被插入时生效，只应用一帧后立即删除；  
  v-enter-active：进入过渡的结束状态，元素被插入时就生效，在过渡过程完成之后移除；  
  v-leave：离开过渡的开始状态，元素被删除时触发，只应用一帧后立即删除；  
  v-leave-active：离开过渡的结束状态，元素被删除时生效，离开过渡完成之后被删除；  

- vue-cli 3.0 中的跨域处理 --- 使用 proxy 代理  
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

用户名、密码 靠 node  
后台(user_name, password) 8080端口  
通过 vue.config.js 设置 proxy -> node 3000 端口  
status api 开发经验 约定好数据接口  
  ```js
  {
    status: 1|0, // 1 用户名正确，0 有误
    message: '用户名和密码有误|500'
  }
  ```

- 奇怪的地方  
  1. Vue 模块化 -> import / export default -> ES6  
     node 后端模块化 -> require() + modual.exports -> CommonJS  
     - 原因：  
       Vue ES6 单页应用，比较前卫 babel + webpack  
       node 后端，以稳定为主，版本更新没有那么快，使用 CommonJS(原生)  
     - 统一：  
       babel 编译  

- 三个项目  
  项目要上线，服务器  
  build -> dist -> express, static  

  ele dist/  web/  
  ele-admin dist/  admin/  
  一定是在 node 项目之中 放到 api  
  express static  

  web 将作为项目的 /  
  admin  
  api 服务 没有页面  
  localhost:3000/ 才是所有人(用户|编辑)统一入口  
  localhost:3000/ 访问 web 前台  
  localhost:3000/admin 管理员  
  localhost:3000/admin/login  