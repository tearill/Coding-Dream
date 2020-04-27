// import "./app.css";
// console.log('welcome');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { HelloComponent } from './hello';
import { AppRouter } from './router'; // 根组件的概念

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
)