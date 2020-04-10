const { findSync } = require('../lib');
const Config = require('webpack-chain');
const config = new Config(); // webpack-chain 的配置实例
const path = require('path');
const resolve = src => { // 抽离公共的部分
  return path.join(process.cwd(), src);
}
const files = findSync('config'); // 读取 config 下面所有的文件读取出来
console.log(files);

module.exports = () => {
  // console.log('在这里做基本配置');
  // 把 files (webpack 配置) config 化?
  const map = new Map(); // ES6 Map 和 JSON 的区别，key 不限类型
  // 重新组织 files
  files.map(file => {
    const name = file.split('/').pop().replace('.js', '');
    console.log(name, '+++++++++++');
    // require(file) -> 引入配置 -> 返回函数 -> 传参返回一个函数
    return map.set(name, require(file)(config, resolve));
  });
  console.log(map, '----------map');
  // 挂载各种配置
  // 把值进行 forEach，把对应的每一个函数进行执行
  map.forEach(v => v()); // 最后分模块的配置就插入上去了，真正的运行配置
  // webpack modules
  return config;
}