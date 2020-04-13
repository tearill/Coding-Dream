// let a:number = 1; // 类型系统，java 等语言的优势，90% 以上的 bug 可以因为把代码从 js -> ts 解决
// console.log('惊雷', a);
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from './hello'; // 入口

console.log(HelloComponent, '--------');
// ReactDOM.render(
//   <HelloComponent />,
//   document.getElementById('root')
// )