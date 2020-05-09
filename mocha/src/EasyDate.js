class EasyDate {
  constructor(diff) {
    this.base = new Date()
    this.diff = diff
  }
  toDate() {
    return this.base
  }
  // 静态方法 => 不需要被实例化，是可以直接用的
  static isLeapYear(year) {
    if (year % 100 === 0) {
      return year % 400 === 0
    }
    return year % 4 === 0
  }
  static toDouble(number) {
    return number > 9 ? number.toString() : ('0' + number)
  }
}

module.exports = EasyDate
