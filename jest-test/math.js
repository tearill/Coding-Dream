function add(a, b) {
  return a + b
}

function minus(a, b) {
  return a - b
}

function mixin(obj1, obj2) {
  return {
    ...obj1,
    ...obj2
  }
}


// let expect = 10 // 期望值
// let res = add(7, 3) // 真实值
// if (expect !== res) {
//   throw new Error('There is something wrong with function add()')
// }

let expect = 4 // 期望值
let res = minus(7, 3) // 真实值
if (expect !== res) {
  throw new Error('There is something wrong with function minus()')
}

// 封装对比的过程
// 断言库
function should(result) {
  return {
    equal: function(expect) {
      if (result !== expect) {
        throw new Error('There is something wrong')
      }
    }
  }
}

function it(desc, fn) {
  try {
    fn()
    console.log(`√: ${desc} pass`)
  } catch {
    console.log(`X: ${desc} fail`)
  }
}

// 不知道是哪一项测试不通过
// 出错后后面的测试无法进行
it('test add', () => {
  should(add(7, 3)).equal(10)
})
it('test minus', () => {
  should(minus(7, 3)).equal(4)
})
it('test mixin', () => {
  let obj = mixin({ a: 1 }, { b: 2 })
  should(obj).equal({ a: 1, b: 2 })
})
