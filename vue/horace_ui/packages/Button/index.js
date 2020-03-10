import XButton from './src'

// 可以被 npm install
XButton.install = function(Vue) {
  Vue.component(XButton.name, XButton)
}

export default XButton