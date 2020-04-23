import { useState, useEffect } from 'react' //共享状态的 useState 方法 rect hooks

export default function useStats(url) {
  // console.log(url);
  // from input 双向绑定新写法 
  const [stats, setStats] = useState()
  // 加载 ajax loading
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  // 封装 state 的处理
  // useEffect 相当于生命周期函数
  useEffect(() => {
    // console.log('mounted')
    async function fetchData() {
      setLoading(true)
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err)
        })
      // console.log(data)
      setStats(data)
      setLoading(false)
    }
    fetchData()
  }, [url])
  return {
    stats,
    loading,
    error
  }
}