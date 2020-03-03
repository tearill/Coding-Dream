# 将 node 的模块化带入 ES6 的世界  

1. babel 工具  
  js 编译器 将最新版本的 js -> 当前环境可以执行的 js  
  写的时候用最新的语法，运行的时候也能执行  
2. 转译  
   `@babel/cli` 编译命令行  
   `@babel/core` 编译核心代码  
   `babel-loader` 加载  
   `@babel/preset-env` 按照环境预处理  
   `@babel/register` 注册 ES6 -> CommonJS(代码的转变功能) 
   在 index.js 引入 `require('@babel/register')` 
3. .babelrc 预处理  
   ```
   {
     "presets": ["@babel/preset-env"]
   }
   ``` 

牺牲 index.js 一个文件，实现 CommonJS 模块化到 ES6 模块的转变  