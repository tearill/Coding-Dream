- JS 主动获取数据 ajax 或最新的fetch
  then 等到数据到达之后 再执行相应操作
  到达的是流 
  toJSON();
  fields ...
  map 新的数组 html数组 
  join 数组变字符串 

- 创建promise时，它既不是成功也不是失败状态。这个状态叫作pending（待定）。
  当promise返回时，称为 resolved（已解决）.
  一个成功resolved的promise称为fullfilled（实现）。它返回一个值，可以通过将.then()块链接到promise链的末尾来访问该值。 .then()块中的执行程序函数将包含promise的返回值。
  一个不成功resolved的promise被称为rejected（拒绝）了。它返回一个原因（reason），一条错误消息，说明为什么拒绝promise。可以通过将.catch()块链接到promise链的末尾来访问此原因。