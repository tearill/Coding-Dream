# mongodb 的索引  

db.users.find({tags: 'coding'}).explain("executionStats"); --- 分析查询状态  

- "stage" : "COLLSCAN" -> collectionScan 检索整个集合  
- "totalKeysExamined" : 0 -> 当前没有利用上任何一个索引  
  "totalDocsExamined" : 3 -> 检索的数据数量  

- 如果有100万用户，查询就会慢下来  
  为 tags 集合建立一个索引  
  db.users.ensureIndex({"tags":1}); --- 添加索引  
  => "stage" : "IXSCAN" --- indexScan  
  db.users.getIndexSpecs() --- 获取 users 表的所有索引  
  db.users.dropIndex("tags_1") --- 删除索引(根据 name 删除)  