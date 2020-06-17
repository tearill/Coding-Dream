// tag 标签 各种 if else 优化
// data 节点的 attributes
// 赋初值 文本节点没有 data，有的节点没有子节点
export function h(tag, data = null, children = null) {
  let flags = null; // 标记什么类型的节点
  return { // VNode
    _isVNode: true, // 架构 Vue 的过程就是实现 VNode 的过程
    flags, // diff 算法优化，没有也可以很好的实现，但是会有很多垃圾的、重复的、好性能的节点类型判断代码
    // 把节点类型的判断提前
  }
}
