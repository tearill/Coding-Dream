import React from 'react'

class ConcurrentDemo extends React.Component {
  state = {
    length: 10000,
    num: 1
  }

  updateNum = () => {
    let num = this.state.num
    this.setState({
      num: num + 1
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.updateNum()
    }, 100)
    // Concurrent Mode 更新频率远远低于 100 ms
    // 保证动画优先执行，如果还有剩余时间，才会执行 js 逻辑
    // this.updateNum 会被 react 推迟
  }

  render() {
    const { length, num } = this.state
    const grids = []
    // 循环生成 10000 个 div，每个 div 中有一个 1
    for (let i = 0; i < length; i++) {
      grids.push(
        <div className="item" key={i}>
          { num }
        </div>
      )
    }
    return (  
      <div className="wrapper">
        { grids }
      </div>
    );
  }
}

export default ConcurrentDemo;