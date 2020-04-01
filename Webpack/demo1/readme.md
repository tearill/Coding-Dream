# Webpack  

- ES6 Node babel loader  
- 前端生产工艺 CI CD  

- src -> 开发目录  
  入口文件 main.js  
  main.js 就像煮火锅，各种东西全部加进去  
  Webpack(就像是火锅底料) -> bundle 通过 Webpck 的机制让 main.js 在各种地方都可以运行，让 JS 中什么东西都可以往里面加  
  把一大堆东西压缩成一块压缩饼干  

- css 在 js 文件中引入 -> 会变成对象的形式  
  css -> 属性节点  
  img -> 二进制  

- Webpack 使得 JS 与其他类型的文件可以相容  
  1. 文本  
  2. { }  

- Webpack 如何让 JS 文件理解 css  
  `yarn add webpack -D`  
  `yarn add webpack-cli -D`  
  `yarn add cross-env`
  
  srcipts  
  "dev": "cross-env NODE_ENV=development webpack" --- 开发的时候，src/main.js -> 例如遇到 css -> 例如css-loader  
  "build": "cross-env NODE_ENV=production webpack" --- 开发结束打包的时候  
  
  静态资源打包 css js styl png gif sass -> Webpack  

  1. cross-env NODE_ENV=... -> 跨平台设置环境，忽略差别  
    可以屏蔽 windows linux mac 的环境变量设置差异  
  2. 最小执行单元：  
    entry output mode  
    mode 编译环境 -> 两种方式:  
    (1) scripts 中指定 "dev": "webpack --mode development"  
    (2) "dev": "cross-env NODE_ENV=development webpack" -> webpack.config.js 中 mode:process.env.NODE_ENV  
  3. rimraf 删除目录，在编译之前先把已有的 dist 目录删除  
  4. loader  
    Webpack -> 工厂流水线  
    工人，不能理解的文件 css styl vue  
    loader 能理解的地方去处理  
    .vue js component  

    老式写法：const css = require('css-loader!./index.css');  