import React from 'react';
import { renderRoutes } from 'react-router-config';
import {
  Top,
  Tab,
  TabItem
} from './style';
import { NavLink } from 'react-router-dom'; // NavLink 路由跳转 (a 标签替代品)

function Home(props) {
  // / => 默认 Home 组件
  // react props 如果在 router 之中，会包含 history、location、route(当前 route.routes)
  console.log(props, '---------');
  const { route } = props;
  return (
    <div>
      {/* Home */}
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Web App</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
      </Tab>
      {/* 子组件 相当于显示子组件的 router-view */}
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
