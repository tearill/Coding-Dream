import React, { Component } from 'react';

class Header extends Component {
  // 服务端没有 click 事件
  // 组件
  // 服务端: 为了 SEO 和性能, renderToString 渲染成字符串
  // 客户端: 为了交互, 还要在前端进行事件绑定
  handleClick () { // 不会运行
    console.log('click');
  }
  render() { 
    return ( 
      <button onClick={this.handleClick}>Header</button>
    );
  }
}

export default Header;
