# HTTP 协议  
- Web 交互的数据格式是什么？如何在用户请求的时候提供多种数据返回格式的选择？  
  ajax json/html  
  传统老的浏览器 text/html  
  动态 web ajax text/json  
  
- 为什么 http.createServer 的回调函数是用 req + res 表达出来的？  
  浏览器 n 和服务器 1 之间的通信  
  TCP 安全连接管道  
  - HTTP 基于 TCP/IP 客户端，IP 地址(dns domain)，端口  
    - 三次握手，建立起连接  
      确认双方都有接收和发送数据的能力  
      1. browser syn(seq+1) SYN_SENT 同步序列号  
      2. ack = j + 1 返回，发送一个自己的 seq = k  
      3. browser established 状态 ack = k + 1
    - 四次挥手，断开连接  
      1. A -> TCP 发送完毕 -> 向 B 发送 FIN 报文  
      2. B 接收到 FIN 报文不会立即用 FIN 报文回复 A，先向主机 A 发送确认 ACK，同时通知自己相应的应用程序(防止 A 多次发送 FIN 报文)  
      3. TCP 向 A 发送一个 FIN 报文  
      4. A 收到 FIN 报文，向 B 发送 ACK 表示彻底释放  
    - dns 递归查找  
      浏览器缓存 -> hosts 文件 -> 运营商 -> ... -> 美国  
  - **0.9 版本中连请求头请求体都没有**  
  - 1.0 提供多文件下载支持  
    text/html -> 增加 image/png text/css text/js  
    accept: text/html  
    accept-encoding: gzip  
    accept-charset: utf-8  
    accept-language: zh_cn  
    请求体 POST  
    状态码 202 503  
    Cache 机制  
    userAgent:  
    1. 通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计  
    2. 
  - 1.1 版本

- 在哪个 HTTP 版本中支持 png 的解析？  
- 雪碧图减少 HTTP 请求，合并到一张背景图上，前端性能优化技术  