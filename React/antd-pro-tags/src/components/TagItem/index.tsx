import React from 'react'

export const TagItem: React.FC<{}> = (props) => {
  return (
    <div className='flexRow'>
      {props.title}
    </div>
  )
}