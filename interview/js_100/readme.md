# JS 100 题  
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues  
原题题解 + issue 区新思路/扩展知识点  

- 在 Vue 2.x 中，defineProperty 并没有对数据提供完全的数据劫持  
  性能代价和获得的用户体验收益不成正比  
  性能坑：n empty object  
- proxy 代理整个对象， defineProperty 每个属性单独代理  

- Vue 的响应式原理中 Object.defineProperty 缺陷  
  1. Object.defineProperty 无法监控到数组下标的变化，不能实时响应  
    但是对 push 等常用操作支持  
  2. Object.defineProperty 只能劫持对象的属性，Proxy 可以代理(劫持)整个对象，并返回一个新对象  
  3. Proxy 不仅可以代理对象，还可以代理数组  

- Vue 2.x 对数组不支持下标变化，但是对数组的 push、pop 等方法