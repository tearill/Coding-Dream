## 有限状态机  

## Cors  
1. Access-Control-Allow-Origin 设置哪个源可以访问我  
2. Access-Control-Allow-Headers 允许携带哪个头访问我  
3. Access-Control-Allow-Methods 允许哪个方法访问我  
4. Access-Control-Allow-Credentials 允许携带 cookie  
5. Access-Control-Max-Age 预检的存活时间  
6. Access-Control-Expose-Headers 允许返回的头，把响应头暴露出去给前端  

- Access-Control-Max-Age：prefilight 请求的结果能够被缓存多久  
  - 简单请求  
  - 非简单  
    1. 预检请求(preflight" OPTIONS) 试探允不允许跨域  
    2. 真实的请求  

- Access-Control-Allow-Credentials  
是否允许浏览器读取response的内容  
  - false  
    拿不到前端传递的 cookie  
    前端：let xhr = new XMLHttpRequest() xhr.withCredentials  

## JSONP  
1. 流程  
2. 封装成 promise   
3. JSONP 后端返回的是什么  