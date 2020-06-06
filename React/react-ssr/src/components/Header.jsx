import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  // 服务端没有 click 事件
  // 组件
  // 服务端: 为了 SEO 和性能, renderToString 渲染成字符串
  // 客户端: 为了交互, 还要在前端进行事件绑定
  handleClick() { // 不会运行
    console.log('click')
  }
  render() {
    return (
      <React.Fragment>
        {/* JS 为什么要在前端运行 => 后端没有 DOM 不能绑定事件 */}
        <button onClick={this.handleClick}> Header </button>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </React.Fragment>
    )
  }
}
export default Header;