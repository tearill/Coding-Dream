// let a:number = 1; // 类型系统，java 等语言的优势，90% 以上的 bug 可以因为把代码从 js -> ts 解决
// console.log('惊雷', a);
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// tsx 文件，react 独有的 JSX 语法表达文件
// index.ts -> index.tsx 入口文件就是用 JSX 语法

// import { HelloComponent } from './hello'; // 入口
import { AppRouter } from './router';

// console.log(HelloComponent, '--------');
ReactDOM.render(
  // <HelloComponent />,
  <AppRouter />,
  document.getElementById('root')
)