const app = { // 中间件服务的 app
  // 手写中间件
  // 顺序执行，栈，空的
  // 每一项都是一个函数(中间件)
  middlewares: [] // 数组实现栈
}

// 在 ctx req + res
// use 函数 放到 middlewares 中 
app.use = function(fn) {
  if (typeof fn !== 'function') {
    throw new Error('中间件一定是函数');
  }
  app.middlewares.push(fn);
}
// 合并
// 中间件最后会合并成一个大函数
app.compose = function() {
  // for (let i = 0; i < this.middlewares.length; i++) {
  //   this.middlewares[i]();
  // }
  // 不能用 for 循环，怎么实现串行执行
  // 执行第一个 由第一个决定是否要往后 next，下一个必须拿到上一个的结果 -> 递归
  function dispatch(idx) {
    if (idx === app.middlewares.length) return; // 执行到最后一个中间件，退出条件
    const fn = app.middlewares[idx]; // 当前的中间件
    // console.log(fn);
    fn(function next() { // 给中间件一个 next 方法 -> 递归执行下一个中间件
      dispatch(++idx); // 执行下一个中间件
    });
  }
  dispatch(0);
}

module.exports = app;