import React from 'react';
import logo from './logo.svg';
import './App.css';

class A extends React.Component {
  // state = { // 组件内部状态
  //   x: 0,
  //   y: 0
  // }
  // componentDidMount() { // 生命周期 类似 Vue mounted
  //   document.body.addEventListener('mousemove', (e) => {
  //     // console.log(e.clientX, e.clientY)
  //     this.setState({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   })
  // }
  render() {
    // const { x, y } = this.state;
    const { x, y } = this.props; // 改为从 props 中取得数据
    return (
      <div>
        x: {x} - y: {y}
      </div>
    )
  }
}
// 1: state
// 2: componentDidMount addEventListener
class B extends React.Component {
  // state = {
  //   x: 0,
  //   y: 0
  // }
  render() {
    const { x, y } = this.props;
    return (
      <div>
        <h2>
          x: {x}
        </h2>
        <h3>
          y: {y}
        </h3>
      </div>
    )
  }
}

// 高阶组件：把组件内部公共的代码抽离出来
// 其实是一个方法，一个函数接受一个组件为参数，返回一个包装后的组件
function WithMouseInfo(Com) {
  class MouseXy extends React.Component {
    // 公共的代码抽离出来
    // 1
    state = { // 组件内部状态
      x: 0,
      y: 0
    }
    // 2
    componentDidMount() { // 生命周期 类似 Vue mounted
      document.body.addEventListener('mousemove', (e) => {
        // console.log(e.clientX, e.clientY)
        this.setState({
          x: e.clientX,
          y: e.clientY
        })
      })
    }
    // 该渲染什么东西?
    // 不同的地方，通过参数 Com 进来
    render() {
      const { x, y } = this.state;
      // A B 组件在 MouseXy 内部调用了，而且还传了参数 x、y
      return (
        <Com x={ x } y={ y } />
      );
    }
  }
  return MouseXy;
}

const AXy = WithMouseInfo(A); // 返回的是组件
const BXy = WithMouseInfo(B);

class App extends React.Component {
  render() {
    return (
      <div>
        <A />
        <AXy />
        <BXy />
      </div>
    )
  }
}

export default App;
