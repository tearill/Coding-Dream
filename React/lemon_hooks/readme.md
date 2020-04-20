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