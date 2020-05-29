// 下面代码中 a 在什么情况下会打印 1 ？
// 不可能是简单数据类型
// a 是变化的

// == 隐式类型转换
// 显式类型转换
// 原始数据类型 | 复杂数据类型

// var a = {
//   i: 1,
//   toString() {
//     console.log('---toString')
//     return this.i++
//   },
//   [Symbol.toPrimitive]() {
//     return this.i++
//   }
// }

// var a = {
//   value: 0,
//   valueOf: function() {
//     this.value++
//     return this.value
//   }
// }

// var a = {
//   num: 0
// }
// a.valueOf = function() {
//   console.log('---valueOf')
//   return ++this.num
// }

// generator 函数实现
// let a = {
//   gn: (function* () {
//     yield 1
//     yield 2
//     yield 3
//   })(),
//   valueOf() {
//     return this.gn.next().value
//   }
// }

// defineProperty 实现

Object.defineProperty(window, 'a', {
  get: function() {
    // if (this.value) {
    //   return this.value += 1
    // } else {
    //   return this.value = 1
    // }
    return this.value += 1
  }
})

if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}
