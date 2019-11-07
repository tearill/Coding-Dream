- const 一定要给值
- 函数表达式
- live-server stylus nodemon
  management 
  yarn 更加优秀 npm的替代品，
  由facebook维护

- 时间复杂度 O(n) (for 循环)
  空间复杂度 notZeroArr = []  zeroArr = [] n+n = 2n 2可以省略 所以空间复杂度为n S(n) 
- concat 方案 API 缺点是花了空间
[0, 1, 0, 3, 12] nums
index 指针 0 nums.length
nums 重写 是不是不用空间
i = 0  index = 0
[] i = 1 index = 0
[1] nums[index] = 1, index++  i = 2  index = 1
[1] i = 3  index = 1
[1, 3] nums[index] = 3, index++ i = 4  index = 2
[1, 3, 12] nums[index] = 12, index++ i = 4  index = 3
[1, 3, 12, 0, 0] 