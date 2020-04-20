const {
  createStore
} = require('redux')

// let a = 123;
// a 状态
// let globalState = {
//   home: {},
//   login: {}
// }
// 设计一套流程修改：dispatch -> action -> mutation -> state
// reducer 纯函数 -> state
// reducer 无副作用，同样的输入，同样的输出
// 参数 state：上一次的 state || action：dispatch 的那个 action
function reducer(state, action) {
  // console.log('到达 reducer', state, action);
  if (action.type === 'CHANGE_HOME_STATE') {
    // let newState = JSON.parse(JSON.stringify(state));
    // newState
    return {
      home: action.home,
    }
  }

  if (action.type === 'DELETE_HOME_STATE') {
    return {}
  }

  // 一个 type 都没命中，返回默认值
  return {
    home: 'home state',
    login: 'login state'
  }
}
// action: js 对象
// type: 发起这次 action 是要做什么
// dispatch -> action -> reducer(考虑 state 默认值，考虑后续 state 的变化) -> state
let action = {
  type: 'CHANGE_HOME_STATE',
  home: 'home_state_new',
  a: 1, b: 2
}
// 生成 reducer 的默认值
let store = createStore(reducer);
console.log(store.getState());
// 修改默认值
store.dispatch(action)
console.log(store.getState());

let action1 = {
  type: 'DELETE_HOME_STATE'
}

store.dispatch(action1);
console.log(store.getState());