# React-SSR  
`npm i express react react-dom -S`  
`npm i webpack webpack-cli -D`  

## 前后端组件衔接  
1. 前端代码通过 webpack 生成在 static 目录下  
2. express 启动 static 静态资源映射  
3. react 组件在服务端生成了 html  
4. express 后端返回 html 文件时要把前端打包好的资源通过 script 返回, 前端打包好的代码执行, 完成事件绑定  
