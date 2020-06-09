import { h, init } from 'snabbdom'
// init 方法用来创建 patch 函数
const patch = init([])

const MyComponent = props => {
  return h('h1', props.title)
}

// 组件的产出是 VNode
const prevVnode = MyComponent({ title: 'prev' })
console.log(prevVnode)
// 将 VNode 渲染成真实 DOM
patch(document.getElementById('app'), prevVnode)

// 数据变更，产出新的 VNode
setTimeout(() => {
  const nextVnode = MyComponent({ title: 'next' })
  // 通过对比新旧 VNode，高效地渲染真实 DOM
  patch(prevVnode, nextVnode)
}, 3000);
