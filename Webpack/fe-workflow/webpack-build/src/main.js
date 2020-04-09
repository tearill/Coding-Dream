// console.log('项目入口main.js');
require('./style/index.css'); // 2 引入 css 文件 webpack bundler 一切静态资源
// 1. const ES6 -> ES5 env 
const h2 = document.createElement('h2');
h2.innerText = 'testaaa';
h2.className = 'test';
// 3 挂载点 html template
document.body.append(h2);