// TDD 测试驱动开发
// 敏捷开发
// 先写测试，再写实现的业务代码

// 待测试的代码
const EasyDate = require('../../src/EasyDate')
const should = require('should') // 断言库

// describe 打开一次测试分块
describe('想要测试Date合格', () => {
  // 添加测试用例
  let date = new EasyDate('+1m') // 可以给一个在当前日期后的偏移量
  it('测试日期实例正确', () => {
    // 测试，生成一个日期
    // 写测试代码，用上 src 下的代码，测试未来写的代码是否正确
    let some = date.toDate()
    let today = new Date() // 当前的日期对象
    should(some.getFullYear()).equal(today.getFullYear())
    should(some.getMonth()).equal(today.getMonth() + 1)
  })
  
  describe('闰年', () => {
    it('是否为闰年', () => {
      should(EasyDate.isLeapYear(2000)).be.True()
    })
  })

  describe('月份', () => {
    it('输出月份，个位数前面自动补0', () => {
      should(EasyDate.toDouble(11)).equal('11')
      should(EasyDate.toDouble(9)).equal('09')
    })
  })
})
