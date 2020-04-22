import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import THREE, { Vector3 } from 'three'
import { loadModel } from '../utils/utils'
import Game from '../components/Game'

class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cameraPosition: new Vector3(0, 5, 0),
      lookat: new Vector3(0, 0, 0)
    }
    // this.gameLoop = this.gameLoop.bind(this)
  }

  componentDidMount() {
    this.mounted = true
    window.THREE = THREE
    // 加载 3d 模型
    loadModel('../../assets/sitepoint-robot.json')
      .then(geometry => {
        this.setState({ geometry })
      })
    this.requestGameLoop()
  }

  requestGameLoop() {
    // 60 fps
    // 1. () => {}
    // 2. bind
    this.reqAnimId = window.requestAnimationFrame(this.gameLoop)
  }
  // decorator
  @autobind
  gameLoop() {
    // console.log(this, '---')
  }

  render() {
    const width = window.width,
      height = window.height
    // react jsx 先把 state 解构
    const {
      cameraPosition,
      lookat,
      geometry
    } = this.state
    return (  
      <div>
        {
          geometry ? <Game 
            width={width}
            height={height}
            cameraPosition={cameraPosition}
            lookAt={lookat}
            geometry={geometry}
          /> : 'Loading'
        }
      </div>
    )
  }
}

export default GameContainer
