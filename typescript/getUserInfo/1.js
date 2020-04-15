const getUserInfo2 = function(user) { // 参数很随意
  // arguments js 不靠谱的地方 没有刀柄的小刀
  // ts 弥补了 js 的不靠谱，引入了类型系统
  return `name: ${user.name}, age: ${user.age}`;
}
// js 不会做运行前检测，动态语言 (java, ts 静态语言)
// 先编译，再运行
// 多人协作时不严格的语法会带来大麻烦
console.log(getUserInfo({name: "Horace"}));