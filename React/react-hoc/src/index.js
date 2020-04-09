import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <button id='add'>add</button>
    <button id='minus'>minus</button>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// let a = 1 + 2 - 3;
// let b = 2 + 3 - 6;
// let c = 4 + 2 - 5;
// 共同点：先求和再求差(抽象)
// 不同点：通过参数传递
window.onload = function() {
  const add = document.getElementById('add');
  const minus = document.getElementById('minus');
  console.log(add);
  // let delay = 2000;
  // let prev = Date.now();
  add.onclick = throttle(function() {
    console.log('发出网络请求');
  }, 2000);
  minus.onclick = throttle(function() {
    console.log('send req');
  }, 2000);
  // 两个按钮都要，怎么封装？
  /**
   * 封装思路
   * 相同的：1 2 3 4，封装在自己内部
   * 不同的：干的事不一样(function)，传给我一个函数
   * 函数是一等公民：函数和其他变量有同等的地位，
   * 他们都可当作函数的参数，也可当作函数的返回值返回
   */
  // 高阶函数：high order function (HOF)
  // React => 高阶组件 high order component (HOC)
  function throttle(func, delay) {
    let time1 = Date.now();
    // 里面这层函数就是返回给 onClick 的函数
    return function(...args) {
      let time2 = Date.now();
      if (time2 - time1 > delay) { // 执行时机到了
        func.call(this, ...args);
        time1 = time2;
      }
    }
  }
}
/**
 * A: 需要获取当前鼠标位置信息
 * B: 需要获取当前鼠标位置信息
 */
