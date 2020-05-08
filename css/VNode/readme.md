# VNode 虚拟节点  
- Virtual DOM | babel AST 抽象语法树  
```vue
<template>
  <div id="root">
    <span class="demo">
      This is a span.
    </span>
    <p>DOM</p>
  </div>
</template>
```
JSON 表达 html -> js  
DOM 文本节点  
使用 tree 的结构来表达，treeNode 的结构都一样，屏蔽了最底层文本节点的差异  
递归算法  
```js
{
  tag: "div", // 标签
  attrs: { // 标签上的所有属性封装
    id: "root"
  },
  children: [
    {
      tag: "div",
      attrs: {
        className: "demo"
      },
      children: [
        {
          tag: undefined, // 递归的退出条件
          text: "This is a span"
        }
      ]
    },
    {
      tag: "p",
      children: [
        {
          tag: undefined,
          text: "DOM"
        }
      ]
    }
  ]
}
```
AST (Abstract Syntax Tree)  
