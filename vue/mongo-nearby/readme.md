# mongo-nearby  

- 

- 前后端分离  
  如果有上万条数据 insertMany([])  
  mysql  几十万条  
  千万条，亿  -> mongodb  
  查询 查的更快一些，性能优化  
  
- 查询需求  
  quantity 有频繁的需求 100-200  
  explain("executionStats") --- 分析查询状态  
  就这一个需求，加这个索引，在数据库和 node 中间，有 index 存在  
  type + quantity 一起来查找  

- 联合索引  
  db.inventory.createIndex({ quantity: 1, type: 1});  