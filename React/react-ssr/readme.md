# React-SSR 同构  
`npm i express react react-dom -S`  
`npm i webpack webpack-cli -D`  

SSR + SPA  
第一次访问：SSR 服务构建 html 返回  
之后用户的交互：通过 SPA 各种 router 来进行页面的导航  

## 前后端组件衔接  
1. 前端代码通过 webpack 生成在 static 目录下  
2. express 启动 static 静态资源映射  
3. react 组件在服务端生成了 html  
4. express 后端返回 html 文件时要把前端打包好的资源通过 script 返回, 前端打包好的代码执行, 完成事件绑定  

## 路由  
前端：控制组件  
地址栏发生变化，地址栏里面的 url 是不会发送，不会向后端发起请求  
http://www.baidu.com  

后端：github.com/api/v1/login  

路由既可以在前端也可以在后端  
https://juejin.im/timeline/frontend 后端生效，后端渲染 html
https://juejin.im/timeline/frontend 前端 js 也可以控制地址栏  

localhost:3000/login  
- js 切换 login  
- /login 访问后端，后端也应该返回 login 对应的组件  