import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from './Search'

// 配置
Enzyme.configure({
  adapter: new Adapter()
})

let wrapper
// 测试集, 装载很多的测试
describe('test Search', () => {
  beforeEach(() => {
    wrapper = mount(<Search onSubmit={() => {}}/>)
  })
  // 测试用例
  it('normal render', () => { // 测试正常渲染
    // 每个测试都要挂载
    // let wrapper = mount(<Search onSubmit={() => {}}/>)
    // 测试一个方法是否报错
    expect(() => {
      wrapper.setProps()
      wrapper.unmount()
    }).not.toThrow()
  })

  it('container input ele', () => {
    // let wrapper = mount(<Search onSubmit={() => {}}/>)
    let len = wrapper.find('input').length
    expect(len).toBe(1)
  })

  it('input change', () => {
    let wrapper = mount(<Search onSubmit={() => {}}/>)
    wrapper.setState({ content: '' })
    let input = wrapper.find('input')
    input.simulate('change', { // simulate 模拟事件
      target: {
        value: 'hhh'
      }
    })
    expect(wrapper.state().content).toBe('hhh')
  })

  it('test onSubmit callback', () => {
    // 测试 obSubmit 回调是否被调用
    let fn = jest.fn() // 模拟一个函数
    let wrap = mount(<Search onSubmit={fn}/>)
    wrap.setState({ content: 'hhh' })
    let input = wrap.find('input')
    input.simulate('keyUp', {
      keyCode: 13
    })
    expect(fn).toHaveBeenCalled()
    // this.props.onSubmit(content) 调用的时候必须传参数
    expect(fn).toHaveBeenCalledWith('hhh') // 测试调用的时候传的参数
  })
})
