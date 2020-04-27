import * as React from 'react'
import { connect } from 'react-redux'
import { MembersPage } from './page'
import { State } from '../../reducers'

const mapStateToProps = (state: State) => ({
  // 某个分支可能只需要某些状态，取对应需要的状态
  members: state.members
})

const mapDispatchToProps = (dispatch) => ({
  // 触发 action
  fetchMembers: () => {
    console.log('action')
  }
})

// 容器组件把 UI 组件包裹起来，给 UI 组件提供状态
// connect 向 provider 借状态，取到 Provider 组件的 state 参数中取到合适的 reducer
// 把需要的状态借过来，交给 UI 组件去渲染显示
export const MembersPageContainer = connect(
  mapStateToProps, // 借状态函数
  mapDispatchToProps // 映射 action
)(MembersPage)
