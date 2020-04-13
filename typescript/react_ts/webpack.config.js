const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'), // 设置上下文环境，工作在哪个地方
  resolve: { // 帮处理哪些静态文件
    extensions: ['.js', '.ts', '.tsx'], // ts typescript 后续要处理的文件全部添加在这里
  },
  entry: {
    app: './index.ts', // 入口 webpack 打包入口可以有多个
    vendorStyles: [ // bootstrap css 的框架，开发中都是业务代码在改变
      // 框架要被打包，但是不会被修改，单独打包  
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(basePath, 'dist'), // 打包出口路径
    filename: '[name].[hash].js', // 打包出来的文件名 hash
  },
  module: { // 分成不同的模块进行打包的处理
    rules: [
      {
        test: /\.(ts|tsx)$/, // 文件匹配
        exclude: /node_modules/, // 排除和业务无关的(浪费时间)
        loader: 'awesome-typescript-loader', // 开启合适的 loader
        options: { // 选项
          useBabel: true, // .ts -> .js -> babel
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // 将 css 进行压缩
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/, // 匹配图片
      //   loader: 'file-loader',
      //   options: {
      //     name: 'assets/img/[name].[ext]?[hash]', // 按照规范进行命名
      //   },
      // },
    ],
  },
   // For development https://webpack.js.org/configuration/devtool/#for-development
  devtool: 'inline-source-map', // 
  devServer: { // webpack-dev-server
    port: 8080,
    noInfo: true,
  }, 
  plugins: [ // 插件
    // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({ // 指定模板文件
      filename: 'index.html', // Name of file in ./dist/
      template: 'index.html', // Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({ // 挂载 css 文件
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}