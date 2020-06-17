import { h } from './h';
import render from './render';

// 组件的本质 VNode
// 返回值是 VNode
const elementVNode = h(
  'div',
  {
    styles: {
      height: '100px',
      width: '100px',
      background: 'red'
    }
  },
  h(Portal, {
    target: '#portal-box',
  }, [
    h('span', null, '标题 1'),
    h('span', null, '标题 2'),
  ])
)

render(elementVNode, document.getElementById('app'));
