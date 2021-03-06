import React, { Component } from 'react'

class Search extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleKeyUp = (e) => {
    const { content } = this.state
    if (e.keyCode === 13 && content) {
      this.props.onSubmit(content)
      this.setState({ content: '' })
    }
  }

  render() { 
    return (
      // 受控组件
      // 非受控组件
      <input type="text" value={this.state.content} onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
    )
  }
}

export default Search;
