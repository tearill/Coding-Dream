// 所有的 Webpack 配置放在 config 目录
// 导出一个函数
module.exports = (config, resolve) => {
  // 在别的地方导入的时候运行这个函数，闭包
  return () => {
    config // 声明入口有三步
      .entry('app') // 1. entry 开始
        .add(resolve('src/main.js')) // 2. 设置根目录入口
        .end() // 3. 结束对 entry 的设置
      .set('mode', process.env.NODE_ENV) // 设置编译模式
      .output
        .path(resolve('dist')) // 输出路径
        .filename('[name].bundle.js'); // 指定输出的文件名，根据入口文件来动态决定
  }
}