# vue 全文检索  

element-ui -> vue search 组件  

mongodb 天生支持全文检索、模糊查询  

- blog  
    users  
    posts title  

- mongodb 模糊查询  
  1. 建立文本索引  
     db.posts.ensureIndex("title": "text")  
  2. 模糊查询 
    ```
    db.posts.find({ 
      $text: {
        $search: "love"    
      } 
    })
    ```

- node 实现  
  1. 建立数据库连接(开启使用创建索引功能) --- db/db.js  
  2. 建立相应的 mongoose 数据表的物理模型 --- models/post.js  
  3. 建立相应的路由进行查询操作 --- routes/index.js || routes/search.js  