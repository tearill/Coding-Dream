import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';

// react hooks 超越 redux vuex 的新特性，跨组件共享状态
export const App = () => {
  const [name, setName] = React.useState('initialName'); // 改变组件的编写方式 redux 的新方式
  const setUserNameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent userName={name} onChange={setUserNameState} />
    </>
  )
}