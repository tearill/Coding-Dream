# vue-online-shop-frontend  

## 全栈应用  

### 开发准备  

- 使用Vue + webpack + Express 搭建迷你电商全栈应用  

- 商品展示列表（Home.vue）  
- 商品详情（Detail.vue）  
- 购物车（Cart.vue）  
- 商品的后台管理页面（Admin.vue）  

- router  
  - / 首页  
  - /admin 商品管理页  
  - /cart 购物车  
  - /admin/new 创建新的商品  
  - /admin/edit 编辑商品信息  
  嵌套路由：要注意子路由不需要加 /  
  子路复用父级的 path  

- 使用 express-generator 脚手架来初始化 Express 项目  
  npm i -g express-generator  
  express vue-online-shop-backend  
  npm i  
  npm start  
  初始化运行在 <http://localhost:3000/> --- 在 bin/www 中可以看到
  app.js：Express 应用主文件  
  bin/www：用来开启服务器的脚本  
  model: 数据库的模型以及实例  
  routes/api：路由主文件 --- 所有的路由  
  controllers: 控制器文件
  views：页面的模板文件  

### 电商项目从设计数据库开始  

- 设计数据的结构 --- Schema  
  productSchema  
  manufacturerSchema  
  | |  
  \\/  
  const Product = model('Product', productSchema);  
  const Manufacturer = model('Manufacturer', manufacturerSchema);  
  生成模型类向外输出(映射数据库中的表) --- 便于增删改查数据的时候通过模型建立数据的对象  
  
  | |  
  \\/  

- 接入MongoDB数据库  
  npm i mongoose  
  mongoose.connect(`mongodb://localhost:27017/test`);  
  Products -> products  ||  Manufacturer -> manufacturers  
  操作数据库后生成的集合名称是定义的类名小写的复数 --- mongoose 自动完成的  

  | |  
  \\/  

- 启用路由  
  var apiRouter = require('./routes/api'); --- 引入路由  
  app.use('/api/v1', apiRouter); --- 在框架中启用路由中间件  
  把所有的路由前缀设置成为 /api/v1 --- /api/v1 表示第一个版本的 api，在大型项目中，有版本的需要  

  | |  
  \\/  

- 设置路由 --- 只负责路由的分发  
  在 routes/api/index.js 下定义所有的路由  
  对应的业务引入控制器实现  

  | |  
  \\/  

- 配置路由相应的操作 --- 控制器 controllers --- 实现具体的业务操作  
  在 controllers 下配置相应的业务实现操作  
