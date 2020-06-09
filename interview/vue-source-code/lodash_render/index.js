const _ = require('lodash');
// _ DOM -> 查找节点，修改 -> 数据改变 -> 动态 html -> 编译 -> 更新到页面
const compiler = _.template('<h1 id="title"><%= title %></h1>'); // 设置成为模板
const html = compiler({title: 'My Component'});

console.log(html);
setTimeout(() => {
  console.log(compiler({title: 'New Component'}));
}, 3000);
