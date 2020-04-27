# react + ts + hooks  

1. sourceMap  
2. --inline  
3. polyfill  
4. css 处理  
5. react 新特性带来的 fragment  

react/vue 开发，/dist 目录，给后端或自己 docker nginx 服务代理  

js 的责任 Babel  
npm i @babel/cli @babel/core  @babel/preset-env @babel/polyfill --save-dev  
- polyfill  
  fill 填充，poly 一些特性  
  ES6+ 低端浏览器可以被支持  
  两个方面：  
  1. babel-preset-env + babel-core 降级处理  
    const let -> var || () => {} -> function() {}  
  2. polyfill 会把一些无法降级处理的 Promise Array map reduce  
    手动实现 垫片，手动添加 script src = "polyfill.js"，使得浏览器从不具备这个功能 -> 具备  

  在实现 polyfill 的时候要做判读，不是要给所有的浏览器都做同样的打补丁  
  打补丁之前先判断浏览器是否拥有此功能  
  polyfill.js 打包到 bundle.js 之中  
  3. plugin  

- inline 和 hot 的区别  
  webpack-dev-server ---mode development --inline --hot --open  
  inline 和 hot 都是改变后刷新内容  
  inline 强制刷新，弊端是 MVVM 状态会丢失  
  hot hmr(hot module reload)，在前端代码变动的时候无需整个刷新页面，只把变化的部分替换掉  
  --hot --open 如果是 hmr 部分更新，hot 更新  
  如果不是 hmr 部分，非状态部分(html等) inline 强制刷新  

- css  
  1. style -> .css 输出  
    MiniCssExtractPlugin 抽离 css  
  2. 编译时 css 压缩  
    OptimizeCssAssetsPlugin 优化 css  
  3. 如何调试 bug(p color)  
    style-loder 开发的时候  
    定位 p color 错误，style 代码很多有也忘了位置在哪里  
    webpack 帮助定位错误 -> 点一下就能跳到错误的源码所在行  
    devtool: "source-map" -> 源码映射  
    source-map 帮助映射到源码的位置，自己真正写的代码的位置，而不是编译兼容后的代码  

## React 全家桶 => react-router + redux + ts  
1. React 全家桶比 Vue 复杂 react-router-dom  
  一切皆组件  
2. redux 给 React 中的组件带来了新的变化  
  组件变为：容器组件 + UI　组件  
  **容器组件(container)：**专门负责 connect 去向 Provider 组件的 store 属性拿到合适的状态，然后通过 props 的形式传递给 UI 组件  
  **UI 组件(StatelessComponent)：**专门负责接收状态(props 接收)，并展示到页面上  
3. TypeScript 在关键的时候进行类型的约束  
  redux 数据流 reducers/index.ts 中可以进行状态的模块化组合，组合多个状态成为最终的一个状态  
  ```js
  export const state = combineReducers({
    members: membersReducer // members 部分 -> 一个分支
    // 将来还可以添加其他的分支
  })
  ```
  在 reducers/index 中再对总的向外输出的状态提供一个限定，限制整个应用中的状态类型  
  ```js
  export interface State {
    members: MemberEntity[] // 限制一个分支状态的类型
  }
  ```
  在对应的 reducer 状态模块中向外提供一个 reducer 函数  
  在 store 拿到状态进行创建 store 状态仓库的时候 TypeScript 就可以使用泛型对状态进行限制  
  ```js
  export const store: Store<State> = createStore(
    state
  )
  ```
4. TypeScript 除了支持类型检查，提高了准确性之外，还提高了编程的简易性，进一步降低了出错的概率(在类型检查之后提供了输入的提示，更加适合多人合作)  
  TypeScript 没有浪费时间多写代码，减少了错误，减少调试的时间，让代码拥有类型的补全，更加方便  
5. 泛型：泛指组件内部重要的类型  
  一个是外部传进来的 props，一个是组件自身的状态 state  
  