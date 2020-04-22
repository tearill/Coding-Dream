# React + Three.js  
1. three.js webgl 3D 渲染 canvas 3d  
  形状 材质 camera screen  
  react + three.js 组件化开发 可视化应用  
2. 写高质量代码，由 eslint 驱动  
3. react jsx 解析？  .jsx -> .tsx -> webpack.config.js -> awesome-typescript-loader -> tsconfig.json jsx -> react 编译  
  babel preset + plugin  
4. 你对好代码是如何定义、考虑的？  
  - 代码风格 eslint  
  - 好的代码需要修炼  
    常用的数据结构  
    常用的算法  
    常见的设计模式  
  - TypeScript 类型检测  
5. 代码拉下来，先看 .eslintrc  
  良好的编程风格是优秀代码的开始，是团队协作的开始  
  js 的语法不严格，需要 eslint 来规范  
  airbnb 风格  
6. react bind(this) 的处理  
  - 事件绑定时 bind
  - constructor 中 this.xxx = this.xxx.bind(this)
  - 事件绑定时 () => {}
  - autobind babel plugin -> jsconfig.json 中配置  
    ```json
    {
      "compilerOptions": {
        "experimentalDecorators": true
      }
    }
    ```
7. ES6 class 关键字 基于原型，class 只是语法糖  
  classProperties ES7 新增