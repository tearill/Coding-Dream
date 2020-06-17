# VNode  
组件的本质 -> VNode  
- Vue 架构  
  - h 虚拟节点的生成  
    1. 可以良好的表达模板结构 html -> json  
      内存 json  
    2. 抽象能力，便于代码的执行  
    3. 虚拟节点 VNode，要有利于 diff、patch 算法的优化  

  - render 真实 DOM  
    diff 算法  

总的来说可以把 VNode 分成五类，分别是：html/svg 元素、组件、纯文本、Fragment 以及 Portal：