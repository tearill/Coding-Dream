# 逐行级别的 Vue 源码  
## 组件的本质  
- 组件的本质是什么？  
  从历史来讲，JQuery 年代，比起组件，模板引擎的概念更流行  
  模板引擎的概念是：字符串 + 数据 => html  

  **组件的本质: 一个组件就是一个函数，给我什么样的数据，我就渲染对应的 html 内容**  

- 问题  
  模板编译后，挂载到挂载点上 mount  
  除了 webpack.config.js + babel  
  Webpack 缺点：复杂  
  使用 parcel：极速零配置 Web 应用打包工具  

- Vue、React 中组件的本质没有改变，但是组件的产出变了  
  **Vue 一个组件最核心的东西是 render 函数，返回的是 VNode**  
  通过 `patch` 函数将 VNode 渲染成真实 DOM  

  snabbdom 快速的 DOM  

  - patch  
  - 