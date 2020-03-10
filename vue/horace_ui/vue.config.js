module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js', // 入口文件
      template: 'public/index.html', // 模板位置
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，默认只有 src 编译，要使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
  }
}