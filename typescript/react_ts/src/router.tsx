// Vue 全家桶  React  router
import * as React from 'react'; // 组件
import { Route, HashRouter, Switch } from 'react-router-dom';
// vue-router 对比学习 react-router
// import { About } from './components'
import { App } from './app';
// import { Cpn } from './cpn';
// import { Detail } from './detail'
import { About } from './components';
import { MemebersPage } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    // new VueRouter()
    <HashRouter>
      <div className="container-fluid">
        {/* Vue 的 routes 数组 */}
        <Route path="/" component={ App }/>
        <Switch>
          {/* Switch 只匹配一个，exact 精确匹配 */}
          {/* <Route exact path="/" component={ About }/> */}
          <Route path="/about" component={ About }/>
          <Route path="/members" component={ MemebersPage }/>
        </Switch>
      </div>
    </HashRouter>
  )
}

// new Vue({
//   el: '',
//   router,
//   App
// })