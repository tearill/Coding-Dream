// 1. 位运算更快
const VNodeFlags = {
  // html
  ELEMENT_HTML: 1,
  // svg 标签
  ELEMENT_SVG: 1 << 1, // 2
  // 组件
  // 有状态组件
  COMPONENT_STATEFUL_NORMAL: 1 << 2,
  // 需要被 keep-alive 缓存的组件
  COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE: 1 << 3,
  // 已经被 keep-alive 缓存的组件
  COMPONENT_STATEFUL_KEPT_ALIVE: 1 << 4,
  // 函数式组件
  COMPONENT_FUNCTIONAL: 1 << 5,
  // 文本节点
  TEXT: 1 << 6,
  FRAGMENT: 1 << 7,
  PORTAL: 1 << 8 // 指定挂载在哪，离开当前的节点层次
}

// html 和 svg 都是标签元素，可以用 ELEMENT 表示
VNodeFlags.ELEMENT = VNodeFlags.ELEMENT_HTML | VNodeFlags.ELEMENT_SVG
// 普通有状态组件、需要被 keepAlive 缓存的有状态组件
// 已经被 keepAlice 缓存的有状态组件 都是“有状态组件”，统一用 COMPONENT_STATEFUL 表示
VNodeFlags.COMPONENT_STATEFUL = VNodeFlags.COMPONENT_STATEFUL_NORMAL |
  VNodeFlags.COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE | 
  VNodeFlags.COMPONENT_STATEFUL_KEPT_ALIVE

// if (VNodeFlags.flags & VNodeFlags.COMPONENT_STATEFUL) true
// 有状态组件 和  函数式组件都是“组件”，用 COMPONENT 表示
VNodeFlags.COMPONENT = VNodeFlags.COMPONENT_STATEFUL | 
  VNodeFlags.COMPONENT_FUNCTIONAL

export { VNodeFlags }
