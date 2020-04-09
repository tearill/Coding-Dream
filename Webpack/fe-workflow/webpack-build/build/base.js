const { findSync } = require('../lib');
const Config = require('webpack-chain');
const config = new Config(); // webpack-chain 的配置实例
const path = require('path');
const resolve = src => { // 抽离公共的部分
  return path.join(process.cwd(), src);
}
const files = findSync('config'); // 读取 config 下面所有的文件读取出来

module.exports = () => {
  // console.log('在这里做基本配置');
  config // 声明入口有三步
    .entry('app') // 1. entry 开始
      .add(resolve('src/main.js')) // 2. 设置根目录入口
      .end() // 3. 结束对 entry 的设置
    .set('mode', process.env.NODE_ENV) // 设置编译模式
    .output
      .path(resolve('dist')) // 输出路径
      .filename('[name].bundle.js'); // 

  // webpack modules


  return config;
}