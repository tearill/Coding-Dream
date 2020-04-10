// 在 base config 之后插上 babel 处理
// webpack-chain
module.exports = (config, resolve) => {
  // babel 的 js 化
  // Webpack 使用 module 生产单元/模块
  // ts -> js -> env js
  const baseRule = config.module.rule('js').test(/.js|.ts$/);
  const babelPath = resolve('babel.js'); // 不使用 .babelrc 的原因
  const babelConf = require(babelPath); // js，引入的是一个函数，运行函数返回的是 bebel 配置项
  // babel js 灵魂对碰的时候
  console.log(babelConf, '---------');
  const version = require(resolve('node_modules/@babel/core/package.json')).version; // 得到 babel 的版本
  console.log(version, 'version++++++++++');

  return () => {
    console.log(babelConf({ version }), 'babelConf--------');
    baseRule
      .use('babel') // 开启 babel
      // 将 js 文件
      .loader(require.resolve('babel-loader')) // 加载 babel-loader
      .options(babelConf({
        version
      })) // 运行函数拿到 bebel 的配置项 -> JSON Object
  }
}