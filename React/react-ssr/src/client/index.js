import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../Routes';

// SPA
// ReactDOM.render(<Header />, document.getElementById('root'));
// SSR 不需要 render, 只需要进行事件绑定
// hydrate 调和: 服务端已经完成, 客户端不会重复做
const App = function() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}

// App 不是组件
ReactDOM.hydrate(<App />, document.getElementById('root'));
