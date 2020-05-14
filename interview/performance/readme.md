# 性能优化和安全  
- 访问 http://www.baidu.com 的时候发生了什么？  
  301 永久重定向  
  302 临时重定向  
    GET  
    POST -> 降级为 GET  
  304 协商缓存命中  
  307 临时重定向，不会把 POST 请求变为 GET  

- 点击 a 标签不跳转  
  使用 204 状态码  

- 状态码  
  - 1XX 目前正常，客户端可以继续发送请求或忽略这个响应  
    101 Switching Protocol HTTP 升级为 WebSocket 的时候使用  
  - 2XX  
    204 没有返回，响应头后没有响应体数据  
    205 不返回内容，被用于接受用户输入后，立即重置表单，以便用户能够轻松地开始另一次输入  
      与 204 响应不同，返回此状态码的响应要求请求者重置文档视图  
      应用场景：表单不要多次重复提交  
    206 表示部分内容，用于大文件上传  
  - 3XX 重定向状态，资源位置发生变动，需要重新请求  
    301 永久重定向 http -> https 或者 废弃域名 -> 新域名  
    302 临时重定向  
    304 Not Modified  
      If-Modified-Since/Last-Modified  
  - 4XX 请求报文有误  
    400 Bad Request  
    401 Unauthorized  
    404  
    405 Method Not Allowed：请求方法不被服务端允许  
    408 Request Timeout  
    409 多个请求冲突  
    413 请求体数据过大  
    414 请求里 URI 太长  
    429 客户端发太多的请求  
    431 请求头的字段内容太大  
  - 5XX 服务器端发生错误  
    500 Internal Server Error  
    501 Not Implemented  
    503：Service Unavailable 服务器忙  

- js 优化  
  - eval with(欺骗词法) 都不要用  
    eval 可以把任何的 js 文本运行起来  
    消耗性能，安全问题 XSS 攻击  
    cookie 可能有用户身份信息，eval js  
    - 解决方案  
      1. httpOnly 核心的 cookie 加上 httpOnly  
      2. 用户输入前后端转义 encodeURIComponent  
  - 加载的顺序  
    script 放在 body 尾部，不然会阻塞页面的加载  
    - 为什么 script 会阻塞页面的加载？  
      js 是动态的代码，动态操作 DOM，需要下载  
      下载放在 body 尾部，阻塞  
    - CSS 雪碧图  
      减少 http 请求  
      - 缺点：  
        1. 第一次下载的时候有点慢  
      - 阿里 iconfont 为什么不会影响性能？  
        1. cdn 缓存  
        2. 没有 http 请求，被 webpack 打包成 base64  
          如果有请求，http 协议更新了