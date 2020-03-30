const fs = require('fs')

module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => { // 读取当前目录下的所有文件，一次性添加多个路由
    // console.log(file)
    if (file == 'index.js') {
      return 
    }
    const route = require(`./${file}`)
    app.use(route.routes())
      .use(route.allowedMethods())
  })
}