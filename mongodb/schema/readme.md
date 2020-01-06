schema 数据库结构的描述和定义
- articles 
  用户的文章
  在mysql中 (关系型数据库)
  user id 
  article user_id
  一对多
  在mongodb中 (NOSQL数据库)
  基于文档的 doc
- mongoose Schema
  很灵活，不需要提前定义
  给了一个Schema定义
- mongodb 用的是js语法引擎
  mysql 很严格
  - mongoose 连接数据库 -> Schema定义数据库模型 -> Model -> 数据库物理层到面向对象的能力