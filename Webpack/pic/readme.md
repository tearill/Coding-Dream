# Webpack 打包一切静态资源，loader  
- css、stylus、png、fonts、postcss  

## Webpack 为 web 应用工作  
- 入口核心文件 .js 文件  
  webpack-dev-server 是把工作放在内存中  
  目录下没有 dist 目录  
  expres dist.js -> static_server  

1. css-loader style-loader 的区别？  
  js 引入 css  
  Webpack 打包是建立依赖关系的过程  
  找到 import require path extension  
  ext -> loader 对应的  
  package.json 分析，报错  
  **css-loader 为 css 后缀解析以及 css 内的 @import 外部资源服务，分析内部有没有引用其他文件**  
  **tyle-loader 将 css 样式生成静态资源内联，把导入的模块作为样式添加到 DOM**  

2. use 定制性，Webpack 是用来用的  
  用来修，当工作流出现问题的时候要会处理  
  js 处理 css  
  **Webpack 打包是为了 web 应用而来**  style 行内样式 || css 文件 引入 ||  

**loader 从右往左、从下往上执行**  

3. pic 有应用的需要，url-loader  
  base64 什么时候需要，何时启动？  
  **base64 减少了请求的数量**，但不能所有的图片都使用 base64，会造成 js 体积暴增，要设置上限  
  Webpack 在打包图片的时候有什么优化？  

4. css 预处理  
  stylus-loader  
  顺序：stylus-loader 预编译成为 css 文件 -> postcss-loader 补全前缀(autoprefix) -> css-loader 解析 css 文件(分析内部依赖关系) -> style-loader 把样式插入到 DOM 中，静态资源内联  