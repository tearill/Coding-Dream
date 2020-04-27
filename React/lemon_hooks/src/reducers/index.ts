import { MemberEntity } from '../model'
import { combineReducers } from 'redux'
import { membersReducer } from './members' // 模块化
// 接口描述 reducer 限制整个应用中 reducer 的类型和数量
export interface State {
  members: MemberEntity[] // 限制一个分支状态的类型
}

// 一个文件一个 reducer 函数 相当于 Vuex 的 modules
// 提供共享的状态，combineReducers 合并很多个分支的状态
export const state = combineReducers({
  members: membersReducer // members 部分 -> 一个分支
  // 将来还可以添加其他的分支
})
