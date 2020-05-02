# React 实战 网易云音乐  
- 样式组件的使用 css in js  
  ```bash
  yarn add styled-components
  ```
  
1. 项目 reset  
  style.js => createGlobalStyle  

2. 给项目添加 iconfont 图标  
  iconfont 选择图标下载 => 加载图标库  

3. 全家桶  
  react-router-dom  
  像 vue-router 一样配置？  
  routes/index.js  
  ```js
  export default [{
    path: "/",
    component: Home,
    routes: [ // 子组件
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"} />
        )
      },
    ]
  }]
  ```
  App.js 入口文件  
  通过 renderRoutes 加载解析路由配置  
  ```js
  import { renderRoutes } from 'react-router-config';
  import routes from './routes/index';
  ...
  function App() {
    return (
      <HashRouter>
        <div className="App">
          <GlobalStyle />
          <IconStyle />
          {renderRoutes(routes)}
          {/* <i className="iconfont">&#xe62b;</i> */}
        </div>
      </HashRouter>
    );
  }
  ```

4. 每个组件做法  
  function component + style.js(css 样式)  
  每个组件都是一个单独的目录，包含两个部分 index.js 和 style.js  
  > 使用 styled-component 代替传统的 css，使用 css in js 的方式解决全局样式以及字体库的引入问题  
  基于 react-router-dom 编写比较复杂(Switch、Router 组件等)  
  引用 react-router-config 使得跟 vue-router 一样进行配置  
  React.memo() 性能优化 => 只有在 props 更新的时候才会重绘  

5. tabbar 的实现  
  静态的 -> styled-component  
  动态的 -> redux + api  

6. 幻灯片广告  
  + API 数据  
  + 加效果  

7. 将各个模块的 reducer 汇合成为一个总的 reducer  
  在大型应用中，每个模块的 reducer 放到自己组件对应的文件下的 store 中  

8. immutable  
  immutable 不可变数据流管理  
  不会改变已有的数据，只会生成一份新的数据  
  react 思想：状态也是组件的一部分，之前的 reducer 函数 oldState 不应该被改变  