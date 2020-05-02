import React from 'react';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Signers from '../application/Signers';
import Rank from '../application/Rank';
import { Redirect } from 'react-router-dom';

export default [{
  path: "/",
  component: Home,
  routes: [ // 子组件
    {
      path: "/",
      exact: true,
      render: () => (
        <Redirect to={"/recommend"} />
      )
    },
    {
      path: "/recommend",
      component: Recommend
    },
    {
      path: "/singers",
      component: Signers
    },
    {
      path: "/rank",
      component: Rank
    },
  ]
}]
