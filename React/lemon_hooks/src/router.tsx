import * as React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MembersPageContainer } from './components'
import { App } from './app'
// redux vuex 将状态中央化，便于管理，跨组件、父子关系
import { store } from './store'

export const AppRouter = () => {
  return (
    // 向 UI 组件提供状态
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          Router
          <Route component={App} />
          <Switch>
            {/* redux 会带来组件的改变
            concat component -> container connect state
            container + statelessComponent
            容器组件(专门用来 connect 状态) + UI 组件(用来显示状态)
            */}
            <Route path="/members" component={MembersPageContainer} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}