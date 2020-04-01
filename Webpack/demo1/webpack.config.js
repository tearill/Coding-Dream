// console.log(process.env.NODE_ENV);
// 1. 开发的时候 vue-cli Webpack 内存中编译
// 2. 上线时，压缩、优化、代码分离
const path = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist'); // 删除目录的，在编译之前先删除已有的 dist 目录

module.exports = {
  entry: './src/main.js', // 入口文件
  mode: process.env.NODE_ENV, // 以什么模式进行 Webpack 的编译 development product
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // module: {

  // }
}