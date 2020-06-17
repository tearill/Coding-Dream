// 手写 bind
// 返回一个新的函数，this 指向第一个参数
// 1. 拷贝源函数
  // - 通过变量存储源函数
  // - Object.create 复制源函数的 prototype
// 2. 将其返回
// 3. 调用时候的区别
// new 调用？普通函数的调用？

// 扩展函数原型对象，添加一个 myBind 方法
Function.prototype.myBind = function(objThis, ...params) { // 先传一部分参数
  const thisFn = this; // 存储源函数的 this
  let fToBind = function(...secondParams) {
    const isNew = this instanceof fToBind; // 是否通过 new 调用
    // 使用 Object 转换成包装类 => 考虑第一个参数传递基本数据类型的情况
    const context = isNew ? this : Object(objThis); // this 覆盖为上下文对象
    return thisFn.apply(context, params.concat[secondParams]);
  }

  if (thisFn.prototype) {
    fToBind.prototype = Object.create(thisFn.prototype);
  }
  
  return fToBind;
}