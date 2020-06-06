# React-SSR 同构  
`npm i express react react-dom -S`  
`npm i webpack webpack-cli -D`  

SSR + SPA  
第一次访问：SSR 服务构建 html 返回  
之后用户的交互：通过 SPA 各种 router 来进行页面的导航  

## 前后端组件衔接同构  
1. 前端代码通过 webpack 生成在 static 目录下  
2. express 启动 static 静态资源映射  
3. react 组件在服务端生成了 html  
4. express 后端返回 html 文件时要把前端打包好的资源通过 script 返回, 前端打包好的代码执行, 完成事件绑定  

## 路由同构  
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
- 网站禁用 JS，切换 /login 路由，页面切换的时候会进行刷新，请求会去到后端  

## SPA + SSR  
1. / 页面是服务端渲染生成的  
2. 点击 Link 去到 login 页面，JS history API 达到 SPA 体验，和后端没有任何的交互，这一步看到的页面是由 JS 构造出来的  
3. 在当前 login 页面执行刷新操作（发出 /login 请求），又成了服务端渲染  

同一个页面既可以是服务端渲染 SSR，也可以是客户端渲染 SPA，取决于用户行为  

落地页：第一次打开的页面，直接一次性打开，SSR  
之后用户的操作变成了 SPA  

http://localhost:3000/  

## store 同构  
存储应用的状态  
```js
function reducer() {
  return {
    hotCars: [
      {}
    ]
  }
}
// 找一个既可以在服务端发请求，也可以在客户端发请求的库
axios().then(() => {
  // redux update
  dispatch()
})
```
- SPA
1. 用户一进来看不到内容，正在加载中  
2. axios 等待一段时间用户才会看到内容  
3. redux 又数据，页面才会构造出来  

- SSR  
1. 用户一进来，页面加载完毕，就应该有热门车型的内容  
兼顾页面 html 的生成  
兼顾请求的发送，请求完毕会拿到一堆 JSON 数据，服务端会把 JSON 数据告诉前端，因为这个请求在服务端已经请求完毕了，前端可以直接用数据了  
