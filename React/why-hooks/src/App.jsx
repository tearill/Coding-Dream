import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function A() {
  const {x, y} = useMouseInfo()
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  useEffect(() => {
    // didMount
    let id = setInterval(() => {
      hook()
    }, 1000)
    return () => {
      // unMount
      clearInterval(id)
    }
  }, [])
  function hook () {
    let newDate = new Date()
    setDate(newDate)
    // let day = date.getDay()
    // hook 内部拿到的 date 是固定的，不是每隔一秒拿到一个新的 date
    // capture value
    // 拿到的都是当前的 state
    // console.log(newDate.toLocaleTimeString())
    setTime(newDate.toLocaleTimeString())
  }
  return (
    <div>
      time: { time } <br />
      x: { x }
      y: { y }
      {/* date: { date } */}
    </div>
  )
}

function B({ date }) {
  const {x, y} = useMouseInfo()
  return (
    <h2>
      x: { x }
      y: { y }
      date: { date }
    </h2>
  )
}

function WithMouseInfo(Component) {
  class WithMouseComponent extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    componentDidMount() {
      document.addEventListener('mousemove', (e) => {
        this.setState({
          x: e.clientX,
          y: e.clientY
        })
      })
    }
    render() {
      const props = this.props
      return (<Component x={this.state.x} y={this.state.y} {...props} />)
    }
  }
  return WithMouseComponent
}
// 当前坐标
// 包装地狱
// 不会自己合并
// const Amouse = WithMouseInfo(WithTime(A))
// const Bmouse = WithMouseInfo(WithTime(B))

function WithTime(Com) {
  class WithTimeComponent extends React.Component {
    state = {
      date: new Date().toLocaleTimeString()
    }
    render() {
      const props = this.props
      return (<Com date={this.state.date} {...props} />)
    }
  }
  return WithTimeComponent
}

function useMouseInfo() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setX(e.clientX)
      setY(e.clientY)
    })
  }, []) // [] hook 的依赖
  return {
    x,
    y,
    // date
  }
}

function App() {
  return (
    <div className="App">
      {/* <Amouse />
      <Bmouse /> */}
      <A />
      <B />
    </div>
  );
}

export default App;
