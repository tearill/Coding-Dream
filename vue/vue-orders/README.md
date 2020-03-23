# vue-orders  
- 后台管理项目，数据报表

- 前端 不写 node  
  mock 数据  
- 后端 不写 Vue  
前后端分离  
数据流通问题  

orders 表 -> mongodb 十万条订单数据  
migration  

- 需求  
  把订单做成报表  
  table 每20条分页  
  根据月份、地区、商品进行数据的筛选  
  排序  

- 分析  
  1. 订单数据展示，选择 element-ui ->  
     el-table 表格的方式展示  
     el-pagination 分页  
  2. 数据 -> 前后端分离，mockjs 模拟真实数据  
     只需要改一个 url，就可以上线  
     为应用引入 mock，自己来模拟假数据，假数据格式和未来的真实数据是一样的，把功能开发完整  
     前端有了 mock，不需要后端在开发阶段支持  

- 实现  
  el-table + el-table-column  
  数据的展示，数据的可视化 canvas echart  
  table -> rows + columns  
  :data="list"  
  1. table pagination 联动  

- mockjs  
  mock 的造数据魔法 API |100
  1. "|100" -> 生产 100 条数据  
  2. "_id|+1": 1 -> id 字段从指定的数开始自增  
  3. "@cname" -> 随机产生一个中文姓名 || "@name" -> 随机产生一个英文姓名  
  4. Mock.mock('/api/orders', 'post', dataList) -> 模拟在哪个接口 url 请求，请求方式  
  5. "@datetime" -> 随机时间  
  6. "@float(0, 8, 0, 2)" -> 随机生成浮点数，0-8 之间，小数点后两位  

  可拔插的功能，在后端不给力(还没提供数据接口)的时候，插入  
  后端给力(提供好了数据接口)的时候，取消引入  