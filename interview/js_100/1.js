// var a = 2 变量的查询 LHS 查询
// LHS 试图找到变量的容器本身，从而对其赋值 -> 赋值的目标是谁
// RHS 简单的查找某个变量的值，别无二致 -> 谁是赋值操作的源头

function changeObjProperty(o) { // LHS
  o.siteUrl = 'http://www.baidu.com'
  o = new Object() // LHS
  o.siteUrl = 'http://www.google.com'
}

let website = new Object()
changeObjProperty(website)
console.log(website)
