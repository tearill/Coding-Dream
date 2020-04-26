import React, { useState, useEffect } from 'react'
import { ITag } from './interface'
import { fetchData } from '../utils/fetch' // fetch util axios
import { TagItem } from '../components/TagItem'

const initialTags: ITag[] = []

// Functional Component @types/react
// <> 泛型 props
const WelcomePage: React.FC<{}> = () => {
  // useState 提供状态及修改 useEffect 提供 lifecycle
  const [tags, setTags] = useState(initialTags)
  useEffect(() => {
    // lifecycle hooks 函数副作用
    // tags -> api -> mock -> 真的 api
    const url = '/api/tag/all'
    fetchData(url, 'GET')
      .then(data => {
        setTags(data.data)
        console.log(data.data)
      })
  }, [])
  return (
    <div className='inputPageWrapper'>
      {
        tags.map(tagObj => (
          <TagItem key={tagObj.id} title={tagObj.title} />
        ))
      }
    </div>
  )
}

export default WelcomePage
