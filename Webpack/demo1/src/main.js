// Webpack 怎么在 js 文件里处理 css 文件
const css = require('css-loader!./index.css');
const a = 100;

// css -> json
// body {
//   width: 100%;
//   height: 100vh;
//   background-color: orange;
// }
// 图片 -> 二进制

console.log(a, css)
// console.log(a)