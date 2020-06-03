import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/Header';

// SPA
// ReactDOM.render(<Header />, document.getElementById('root'));
// SSR 不需要 render, 只需要进行事件绑定
// hydrate 调和: 服务端已经完成, 客户端不会重复做
ReactDom.hydrate(<Header />, document.getElementById('root'));
