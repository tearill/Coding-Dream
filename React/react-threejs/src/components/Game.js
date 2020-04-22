import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Game extends Component {
  // react es7 静态属性
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props)
  }
  
  state = {
    
  }

  render() { 
    return (  
      <div></div>
    )
  }
}
 
export default Game
