# decorator

1. el-table 删除前要注意提醒  
2. 阿里的面试题 ES7 decoretor 特性  
   装饰器  
   ```js
   function confirmation(target, name, descriptor) {
     console.log(target, name, descriptor)
     let oldValue = descriptor.value
     console.log(oldValue) // 被装饰的函数原来的内容
     descriptor.value = function(...args) {
       // console.log(args)
       MessageBox.confirm('您确定要删除吗', '提示')
         .then(oldValue.bind(this, ...args))
         .catch(() => {})
     }
     return descriptor
   }
   ```
  `oldValue.bind(this, ...args)` --- 混入原来的函数中，把原来的函数拿到装饰器中的环境中执行一遍  
  原来的函数不会改变，只是增加了一些新的功能  