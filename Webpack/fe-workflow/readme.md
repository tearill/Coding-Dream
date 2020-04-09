# 前端工作流 fe-workflow Webpack  

- Webpack 配置  
  6个知识点  

- Webpack 架构  
  1. 源头 package.json  
    `"dev": "cross-env NODE_ENV=development node build/dev.js"`  
    `"build": "cross-env NODE_ENV=production node build/build.js"`  
    Webpack 不直接出场？架构解决，dev build  
    cross-env 进行服务器无差别环境变量配置 node npm 包都用哪些？  
    并行同时考虑工作流架构  
    将编译工作(工作流)通过目录 build 的方式，确定为开发架构的一项  
  2. Webpack 的重要性  
    写代码跟养孩子是一样的，每天都要运营项目，改了一点点地方，Webpack build 天天都用  
  3. base.js 同时服务 dev.js 和 build.js  
    模块化 把基础配置做好，向外输出  
  4. Webpack 其他的 module 及插件处理  
    放在 config  
    文件/模块分离，一个文件只做一件事  
  5. lib 把 module 放在 config 目录下，一个文件一件事  
    lib 提供 findSync 功能，把所有的 js 文件组成一个数组，输出出来交给 webpack-chain  