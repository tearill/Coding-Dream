// Vue 全家桶  React  router
import * as React from 'react'; // 组件
import { Route, HashRouter, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
const hashHistory = createHashHistory();
// vue-router 对比学习 react-router
// import { About } from './components'
import { App } from './app';
import { Cpn } from './cpn';
import { Detail } from './detail'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    // new VueRouter()
    <HashRouter history={ hashHistory }>
      {/* <div className="container-fluid"> */}
      <Switch>
        {/* Vue 的 routes 数组 */}
        <Route exact path="/" component={ App }/>
        <Route exact path="/cpn" component={ Cpn }/>
        <Route exact path="/detail" component={ Detail }/>
      </Switch>
      {/* </div> */}
    </HashRouter>
  )
}

// new Vue({
//   el: '',
//   router,
//   App
// })