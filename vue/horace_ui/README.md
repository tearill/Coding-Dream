# 尝试发布 UI 框架到 npm 上  

- 开发一套 UI 框架  
  element-ui  
  公司需要 UI 框架，但可能现有的 UI 框架不满足需求  
  自己按需定制一份发布 npm  

- 跟平常开发的区别  
  packages 才是开发目录，防止自己的组件  
  原来的 src 改为 examples  

- 编写 vue.config.js  
  vue-cli 默认会启动 src 下的服务, 如果目录名变了, 需要手动修改配置  
  
- 在packages 目录下写自己的组件  
  Button/index.js -> 在组件入口文件，给组件添加 install 方法，让它可以被全局使用 Vue.use()  
  packages/index.js -> 在 packages 的入口文件中导入组件并安装导出  

- 配置 package.json  
  "lib": "vue-cli-service build --target lib --name (name) --dest lib packages/index.js"  
  输出到指定目录下  
  description 组件库的描述文本  
  keywords 组件库的关键词  
  license 许可协议  
  repository 组件库关联的 git 仓库地址  
  homepage 组件库展示的首页地址  
  main 组件库的主入口地址(在使用组件时引入的地址)  
  private 声明组件库的私有性, 如果要发布到npm公网上,需删除该属性或者设置为 false  
  publishConfig 用来设置 npm 发布的地址, 这个配置作为团队内部的npm服务器来说非常关键, 可以设置为私有的 npm 仓库  

- 发布到 npm  
  yarn lib: 本地编译组件库代码  
  npm login: 登录 npm(要注意从淘宝源 https://registry.npm.taobao.org/ 换回 npm 自己的源 http://registry.npmjs.org)  
  npm publish: 发布  
  npm publish --access public: 如果发布失败提示权限问题执行  



