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

- 使用 express-generator 脚手架来初始化 Express 项目  
  npm i -g express-generator  
  express vue-online-shop-backend  
  npm i  
  npm start  
  初始化运行在 http://localhost:3000/  
  app.js：Express 应用主文件  
  bin/www：用来开启服务器的脚本  
  routes/index.js：路由主文件  
  views/index.ejs：主页的模板文件  

### 电商项目从设计数据库开始  

- 设计数据的结构 --- Schema  
  productSchema  
  manufacturerSchema  
  | |  
  \\/  
  生成模型类向外输出 --- 便于增删改查数据的时候通过模型建立数据的对象  
  
- 接入MongoDB数据库  
  npm i mongoose  
  mongoose.connect(`mongodb://localhost:27017/test`);  

  操作数据库后生成的集合名称是定义的类名小写的复数 --- 
