// console.log(process.env.NODE_ENV);
// 1. 开发的时候 vue-cli Webpack 内存中编译
// 2. 上线时，压缩、优化、代码分离
// const path = require('path');
// const rimraf = require('rimraf');
// rimraf.sync('dist'); // 删除目录的，在编译之前先删除已有的 dist 目录

// module.exports = {
//   entry: './src/main.js', // 入口文件
//   mode: process.env.NODE_ENV, // 以什么模式进行 Webpack 的编译 development product
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   // module: {

//   // }
// }

const path = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist');
const Config = require('webpack-chain'); // 写 webpack 配置的新方案
const config = new Config(); // 实例化，链式的 Webpack 配置
const resolve = (src) => {
  return path.join(process.cwd(), src)
}

config
  .entry('./src/main')
  .add(resolve('./src/main.js')) // 设置一个入口
  .end()
  .set('mode', process.env.NODE_ENV)
  .output
    .path(resolve('dist'))
    .filename('[name].bundle.js') // entry 叫做 main -> name main
  
config.module
  .rule('css')
  .test(/\.css$/)
  .use('css')
  .loader('css-loader')

module.exports = config.toConfig();