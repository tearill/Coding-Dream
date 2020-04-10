const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config, resolve) => {
  return () => {
    config.plugin('html')
      .use(HtmlWebpackPlugin, [{ // 使用 html 的编译插件，并设定模板文件，编译好的 html 部分插入模板文件中
        template: 'public/index.html'
      }])
  }
}