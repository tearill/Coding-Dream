// 深拷贝：考虑对象相互引用以及 Symbol 拷贝的情况

// var deepCopy = function (obj) { 
//   if (typeof obj !== 'object') return; 
//   var newObj = obj instanceof Array ? [] : {}; 
//   for (var key in obj) { 
//     if (obj.hasOwnProperty(key)) { 
//       newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]; 
//     } 
//   } return newObj; 
// }

function deepCopy(obj) {
  var cobj
  if (obj === null) { // bull 的情况
    return obj
  }

  let t = typeof obj

  // 基本数据类型
  switch (t) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
      return obj
  }

  // 复杂数据类型
  if (Array.isArray(obj)) { // 数组
    cobj = []
    obj.forEach((c, i) => {
      cobj.push(deepCopy(obj[i])) // 依次拷贝数组每一项
    })
  } else {
    cobj = {}
    // object // symbol
    if (Object.prototype.toString.call(obj) == '[object Object]') {
      Object.getOwnPropertyNames(obj)
        .concat(Object.getOwnPropertySymbols(obj)) // 连接上 Symbol 的情况
        .forEach(c => {
          cobj[c] = deepCopy(obj[c]) // 依次拷贝对象的每一个属性值
        })
    } else {
      cobj = obj // 其他的对象 比如 RegExp => [object RegExp] Date() => [object Date]
      // 直接拷贝
    }
  }

  return cobj
}

var a = { 
  a: '1', 
  b: [1, 2, 3, 4, { t: 'test' }], 
  [Symbol()]: 'symbol', 
  d: new Date(), 
  r: RegExp('^\\d$')
}

console.log(deepCopy(a))