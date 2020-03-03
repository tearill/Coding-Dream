// 跨域解决方案 ngnix
module.exports = {
  publicPath: "/admin",
  devServer: {
    // 127.0.0.0.1:8000/api/admin/login
    proxy: { // 代理
      '/api': {
        // 转发到 http://127.0.0.0.1:3000
        target: 'http://127.0.0.1:3000',
        changeOrigin: true, // 换源
        pathRewrite: {
          '^/api': '' // 去掉 api 变成 http://127.0.0.0.1:3000/admin/login
        }
      }
    }
  }
}