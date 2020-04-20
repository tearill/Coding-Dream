import * as React from 'react';

interface Props {
  userName: string
}

// 给默认打招呼
export const HelloComponent = (props: Props) => {
  return (
    <h2>Hello user: {props.userName}</h2>
  )
}