# 九宫格布局  
- 考点：布局 多少种做法  
  亮点 

- 从现代浏览器布局的发展来说，grid 布局(grid-template-columns grid-template-rows)可以帮我们快速搞定九宫格  
  但是考虑到兼容性问题，布局方案选择需要考虑降级处理  
  flex 自适应布局方案 通过 flex: 1 也能完成任务  
  作为盒模型和 float 的布局方案，结合特定的 html 结构，在传统低端浏览器中也可以完美实现  
  不过 display: table 方案，也可以尝试解决  

- 布局的发展史  
  BFC => IFC => FFC => GFC  

  Block Formattting Context 块级格式上下文  
  Inline Formatting Context 内联格式化上下文  
  Flex Formatting Context 自适应格式化上下文  
  Grid Formatting Context 网格布局格式化上下文  