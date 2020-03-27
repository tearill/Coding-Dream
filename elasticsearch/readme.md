1. docker 发布 CI  
2. 数据处理 mongodb + mysql + serveless  
3. 搜索 elastic search  
4. kafka 消息队列  
   发邮件 1万 图片处理  
5. 微服务  
6. 推荐系统 算法工程师  
7. 秒杀系统  
8. redis 内存数据库  

mongodb -> 数据仓库 查询 索引  
复杂的时候 索引的仓库 -> 快速的检索信息  
elastic search 全文检索  

CRUD  
url, method restful  
GET select   
POST save  
PUT/PATCH 修改  
DELETE  
HEAD  
OPTIONS  

kibana 展示端 5601 端口，将 elastic search 数据可视化  
1. url 请求进来  
2. elastic search 检索 -> 拿到索引 index  
   全文检索  
   GET /movies/_search?q=2012  
3. mongodb 元数据查询  

- 启动  
  elasticsearch 安装目录/bin  ---  elasticsearch  
  访问 http://localhost:9200 测试  
  kibana 安装目录/bin  ---  kibana  
  访问 http://localhost:5601 测试  