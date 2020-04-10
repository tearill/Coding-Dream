// production
const rimraf = require('rimraf');
const path = require('path');
const ora = require('ora'); // 加载指示器
// Webpack 最基本的  entry output mode
// webpack-chain 把配置变成编程的过程
// console.log(process.cwd(), __dirname);
const config = require('./base')(); // 模块化 基本配置/(函数)立即执行
// console.log(config);
const webpack = require('webpack');
const chalk = require('chalk'); // 粉笔，绘制

// 项目的根目录下
rimraf.sync(path.join(process.cwd(), 'dist')) // 物理路径
const spinner = ora('开始构建项目...');
spinner.start();

// 进行编译
webpack(config.toConfig(), function(err, status) { // 将返回的配置交给 webpack 去处理
  spinner.stop();
  if (err) throw err;
  process.stdout.write(
    // 向外输出
    status.toString({
      colors: true,
      modules: false,
      children: false,
      chunkModules: false
    }) + '\n\n'
  );
  console.log(chalk.cyan('build 完成\n'));
})

// setTimeout(() => {
//   spinner.stop();
// }, 3000);
