import * as React from 'react'; // 静态编译
// 无状态组件 statelesscomponent
export const HelloComponent = () => { // 返回 html 的函数就是最简单的组件
  return ( // jsx 声明式模板引擎语法，react vue 区别 <template />
    <h2>
      Hello~
    </h2>
  );
};