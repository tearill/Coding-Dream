// console.log('Hello');
// var a = 1
// a
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// react 组件分为很多种 容器型组件 
import GameContainer from './containers/GameContainer'

ReactDOM.render(
  <GameContainer />,
  document.getElementById('game')
)
