import { template } from 'lodash';

// const compiler = template('<h1 id="title"><%= title %></h1>'); // 设置成为模板
// const html = compiler({title: 'MyComponent'});

// // console.log(html);
// document.getElementById('app').innerHTML = html;

// setTimeout(() => {
//   document.getElementById('app').innerHTML = compiler({title: 'New Component'})
// }, 3000);

// 函数式组件
// MyComponent.cache 缓存模板的编译
const MyComponent = props => {
  const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %></h1>'));
  return compiler(props);
}
MyComponent.cache = null;

document.getElementById('app').innerHTML = MyComponent({ title: 'MyComponent' });

setTimeout(() => {
  document.getElementById('app').innerHTML = MyComponent({ title: 'New Component' });
}, 3000);
