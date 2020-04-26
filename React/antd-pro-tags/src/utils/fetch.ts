// method 只用 string 的话类型约束不够
type HttpMethods = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'DELETE'
type FuncType = (url: string, method: HttpMethods) => Promise<any>// 特别的函数 return Promise

const fetchData: FuncType = (url: string, method: HttpMethods) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(response => {
        resolve(response)
      })
      .catch(err => reject(err))
  })
}

// umi antd = element-ui 组件库
// umi antd pro 已经可以运行的项目(admin 后台)

export {
  fetchData
}