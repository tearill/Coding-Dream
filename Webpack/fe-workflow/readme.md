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
  6. 可拔插的 Webpack 插件  
    打包器，打包成最终的产品  
    - babel  
      js ts  
    - css 压缩 stylus -> css  
      postcss  
    - html template  

  Webpack 通过 module 将编译的事物，可拔插的 load 进相应的模块进行处理  
  Webpack + 其他模块的生态链，占据了工作流的生态位  
  Webpack module 配置模块  
  在每个模块中有配置流程：  
    1. test -> 校验什么样的文件需要进入这个文件 /.js$/  
    2. loader -> 使用相应的 loader 进行处理  
    3. 配置项  
      webpack-chain，以 js 的方式处理  
      ts 和 js 是一家的，ts 是 js 的超集，不用学就可以用  
      ts 有类型声明的 js，降低 js 的出错率  