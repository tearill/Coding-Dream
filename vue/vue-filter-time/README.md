# Vue 中的 filters  

- | 的用法  
  linux 中的管道  
  管道里面上一个结果是下一个执行的输入  

- filter 跟 comouted 的区别  
  filter 重视的是格式化，只改变数据的格式  
  computed 重视的是重新计算  

- 评论区要显示几分钟前、几秒前  
  moment 时间库  

- moment 时间库 --- 时间格式化的第三方库  
  使用语法： --- 可以给时间戳  
  moment()  
  moment().format('YYYY-MM-DD HH:mm:ss') --- 格式化输出  
  moment(...).diff(moment(...), 'minutes')  
  moment('...').add(2, 'day').format('YYYY-MM-DD') --- 一段时间后(举例：优惠券有效期)  