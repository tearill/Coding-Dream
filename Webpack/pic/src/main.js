import './styles/main.css'; // 依赖关系
import './styles/main.styl'; // css 预处理
import './styles/font.css'; // 字体
console.log('Horace');

// 使用相应的字体
let body = document.querySelector('body');
let h1 = document.createElement('h1', null, '外部引入字体');
h1.innerText = '外部引入字体';
h1.className = 'iconfont font';
body.appendChild(h1);