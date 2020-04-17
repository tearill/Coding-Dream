import * as React from 'react';
import { Header } from './components';

// React 函数式组件
// 类型限制
// StatelessComponent StateFulComponent
export const App: React.StatelessComponent<{}> = () => {
  return (
    // Hello World
    // 导航
    <div className="container-fluid">
      <Header />
    </div>
  )
}