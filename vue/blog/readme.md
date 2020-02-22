# 博客 --- 全找开发的入门练习  

1. 全栈开发思路搭建  
   前后端分离的全栈开发 Vue  
   整栈开发  admin + server + web  
   前端 --- web  
   后端 --- server  
   后台 --- admin  

- blog  
  1. server 后端服务 接口  
     /api  
     node + mongodb  

  2. vue 用户体验 单页应用开发  

- vue-router 有两种形式  
  1. history js 内置对象 / --- 浏览器历史对象，更像传统的后端 API  
  2. hash #/ --- 兼容性更好  

## 开发  

- 先把完整的路由想一想，搭建一下，在/views目录下把组件建好  
- component  
  网站应用需要用到哪些组件  
  router + views + component 合作  

## 发布  

- vue 写完后 npm run build 生成静态文件 index.html app.js  
- 静态文件包放到服务器目录下，阿里云服务器上 node环境  
- 把 Vue 网站发布  
