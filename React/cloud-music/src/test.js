const { Map, fromJS } = require('immutable');
// immutable 不可变数据流管理
// immutable 提供的 Map 方法
// 对象的修改，引用式赋值
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
// console.log(map1)
console.log(map1, map2)
