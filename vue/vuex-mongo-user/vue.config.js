module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000', // 目标地址
        changeOrigin: true, // 换源
        ws: true, // ws：true / false，是否代理 websockets
        pathRewrite: {
          '^/api': '' // 将地址中开头的 /api 改写为 ''
        }
      }
    }
  }
}