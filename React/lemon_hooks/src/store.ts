// redux mini 版
import { Store, createStore } from 'redux'
import { state, State } from './reducers'
// 通过 reducer 函数处理后，oldState 有一个唯一的状态返回
// 泛型 限制状态树提供的 reducer 中一定要有 membersReducer 类型
export const store: Store<State> = createStore(
  state
)
