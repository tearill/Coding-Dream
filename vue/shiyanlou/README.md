# shiyanlou  

在做项目前，学类似的开源项目  

1. utils prototype 架构师手里有的神兵  
   img_lazyload IntersectionObserver  
   lodash vue-lazyload 会使项目体积变大  
2. router 守卫  
   meta: { title: '', login: true }  
   登录与否判断  
   store vue-cookies  
3. 同时引入同一目录下多个组件  
   使用 require.context()进行优化  
   ```js
    const path = require('path')
    const file = require.context('@/components/home_page', true, /\.vue$/)
    const modules = {}
    files.keys().foreach(key => {
      console.log(key)
      const name = path.basename(key, '.vue')
      console.log(name)
      modules[name] = files(key).default || files(key)
    })
   ```