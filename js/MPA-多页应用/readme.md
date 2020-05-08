## SPA  
```js
<div id="app"></div>
<Route path="" component={} />
```
1. `<div id="app"></div>`  
2. js 请求，app 构造  
3. 看到页面  

- 缺点     
  FMP：第一次有意义内容，很晚，要等很长时间  
  TTI：Time to Interactive  

- 优点  
  切换页面不需要整个页面都刷新  

## SSR  
- 缺点：切换页面造成页面重新刷新  

## 同构  
SPA + SSR  
第一次访问：SSR 服务端构造 html 返回 
之后用户的交互：通过 SPA 各种 router 来进行页面的导航  

门面  
移动端，高性能的地方  

## MPA  
整个应用有多个 html、入口  

后台管理系统  

- 优点  
  每个 html 天然解耦  