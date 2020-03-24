# node_time  
时间处理在后台时  
数据存储 mongodb  

- mongodb 中的 Date() 和 new Date() 表现不一样  
  typeof Date() -> string  
  typeof new Date() -> object  

- ISODate -> mongodb 日期格式  
  ISODate("2020-03-05T08:07:23.757Z")  
  国际时间 -> 格林尼治时间  

  ISODate("2020-03-05T08:07:23.757Z").valueOf() --- 转换成时间戳  
  ISODate("2020-03-05T08:07:23.757Z").toLocaleString() --- 转换到当前时区的时间格式  

orders 订单表  
在某个月的订单，总金额  
1. dump.tar.gz 文件  
   26.3 MB 数据  
   .tar.gz linux 压缩文件  
   导入到 mongodb  
2. 解压  
   linux 中解压文件命令：tar -zxvf dump.tar.gz  

   dump/  
   dump/mock  mock db  
   dump/mock/orders  collection  
   orders.metadata.json  
   dump/mock/orders.bson  文档数据类型(数据库实体文件)  
3. 导入 mongodb  
   mongorestore -h 127.0.0.1:27017 dump  

db.orders.findOne();  
默认一页显示 20 条数据  
db.orders.findOne({orderDate:{$gte:ISODate("2019-01-01"), $lt: ISODate("2019-04-01")}});  
db.orders.findOne({orderDate:{$gte:ISODate("2019-01-01"), $lt: ISODate("2019-04-01")}, status: 'created'});  
db.orders.find({orderDate:{$gte:ISODate("2019-01-01"), $lt: ISODate("2019-04-01")}, status: 'cancalled'});  
db.orders.find({orderDate:{$gte:ISODate("2019-01-01"), $lt: ISODate("2019-01-03")}, status: 'cancalled'});  

- 求所有订单的总金额  
  每一条记录都要  
  大数据运算  
  ```js
  db.orders.aggregate([ // 聚合计算 [] 表示接受多个约束  
    {  
      $group: { // 将数据分组  
        _id: null,  
        total: { $sum: "$total" }  
      }  
    }  
  ]);  
  ```

- 2019年第一季度已完成订单总金额和订单总数  
  ({orderDate:{$gte:ISODate("2019-01-01"), $lt: ISODate("2019-04-01")}}); 时间  
  { status: "completed" }  
  $sum $total 对 total 求 sum  
  ```js
  db.orders.aggregate([
    {
      $match： { // 查询第一季度已完成的订单
        status: "completed", // 订单状态
        orderDate: { // 时间范围
          $gte: ISODate("2019-01-01"), // 大于等于
          $lt: ISODate("2019-04-01") // 小于
        }
      }
    },
    {
      $group: {
        _id: null, // 用来分组的数据依据
        total: { $sum: "$total" }, // 对订单金额求和
        shippingFee: { $sum: "$shippingFee" }, // 对邮费求和
        count: { $sum: 1 } // 把每条数据当作一条进行求和
      }
    },
    {
      $project: { // 修改输出的结构
        grandTotal: { // 求总收益
          $add: [ "$total", "$shippingFee" ] // 把订单金额总和和邮费总和加起来
        },
        count: 1, // 把上一个输出中的 count 输出
        _id: 0 // 不出现在最后的输出结果中
      }
    }
  ]);
  ```

- filter Vue 中的过滤器  
  aggregate 集合查询，上一个查询条件的结果，是下一个查询的输入  
  $match 相当于 where  
  $group 相当于 group by  

- todo 活动 activity  
  开始日期 结束日期  
  1. Schema 设计  todoSchema 
  2. config 中进行连接数据库  
  3. router 中操作数据库 导出的 Todo 类自动映射 mongoodb 中的 todos 集合  
  4. app.js 启用服务 -> 路由中间件 '/todo'  

- mongodb 和 mysql 的本质区别  
  + NOSQL SQL 数据库三大范式  
  + NOSQL doc 存储，允许一定的存储冗余  

user_id name orders  
1. 展示订单 分页 element-ui PC 后台 运营部门 -> 老板  
   总数、第一季度、单品最佳。。。
2. 用户来说 最多的查询  
   price -> products  
   orders 我的订单 user_id 冗余防止 name，不需要关联 user 表  

第一季度 每个州 销量最多的 sku 数量的第一名  
aggregate 应用场景 -> 每次查询的结果是下一次查询的输入  
- 第一季度 orderDate ISODate() $gt | $gt 2019($match)  
- 每个州 $state 分组的依据 $group | state  
- 销量 orderLine.sku $group 分组 $sum 对每一组求和 orderLines.qty  
- sku  第一名 orderby  

$match == mysql中的where  
有效订单 status: "completed"  
state + sku 分组 某个州的某个产品  
$unwind (把一个JSON格式的展开) -> 将 orderLines 展开  
$group 分组 _id  $total 

```js
db.orders.aggregate([
  {
    // 步骤1：匹配条件
    $match: {
      status: "completed",
      orderDate: {
        $gte: ISODate("2019-01-01"),
        $lt: ISODate("2019-04-01")
      }
    }
  }, 
  {
    // 步骤2：按订单行展开
    $unwind: "$orderLines"
  }, 
  {
    // 步骤3：按sku汇总
    $group: {
      _id: {
        state: "$state",
        sku: "$orderLines.sku"
      },
      count: {
        $sum: "$orderLines.qty"
      }
    }
  }, 
  {
    // 步骤4：按州和销量排序
    $sort: {
      "_id.state": 1,
      "count": -1
    }
  }, 
  {
    // 步骤4：取每个州top1
    $group: {
      _id: "$_id.state",
      sku: {
        $first: "$_id.sku"
      },
      count: {
        $first: "$count"
      }
    }
  }
])
```