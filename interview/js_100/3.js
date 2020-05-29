// [1, NaN, NaN]
// map(item, index, arr)
// parseInt()
// 参数：(要转换的数，进制)
// parseInt('1', 0) // 1
// parseInt('2', 1) // NaN
// parseInt('3', 2) // NaN

// console.log(['1', '2', '3'].map(parseInt)) // [1, NaN, NaN]

console.log(['1', '2', '3'].map(Number))

// 如何确保函数在运行时，只接收一个参数，控制函数参数数量
let unary = fn => val => fn(val) // 控制只使用一个参数
// let unary = fn => {
//   return val => {
//     return fn(val)
//   }
// }
let parse = unary(parseInt)
console.log(['1', '2', '3'].map(parse))
