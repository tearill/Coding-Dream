- WEB 跟桌面应用(单机) 最大区别？
  localhost:1234   n个人同时访问  上限？
  并发请求 
  独立的分配给每个用户一个线程 fs读取一个文件  index.html
  I/O 吃紧 300左右并发请求 物理
  解决？ 多加机器 物理设备可以并联
  nginx(负载均衡) 分析哪些机器是空闲的 把用户送到这台机器的IP地址
  充分的发挥每台机器的性能？ 多核
  1234 => node进程 => 一个进程 => 一个CPU
  把CPU都用上 
  