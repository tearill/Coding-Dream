# 编译原理  
代码：字符串  
交给电脑运行  
```js
let codeString = `const http = require('http')`
function run(codeString) {
  // 1. 词法分析
  // 一段解析分析为一个个合法的词(token)
  // 词：const http = require()
  // 2. 语法分析
  // AST
}
```

## 客户端  
ajax: XMLHttpRequest  
fetch  

超文本传输协议：html css js 视频 音频  

http 报文格式  
http1.1: 文本  


服务端返回的：  
状态码  
响应头  

```js
const xhr = new XMLHttpRequest()
xhr.open('POST', url, true)
xhr.setRequest('content-type', 'x-www-form-urlencoded')
xhr.send('keywords=js')
```

## 浏览器  
拼接报文  
```js
POST url http1.1
content-type: x-www-form-urlencoded
user-agent: ''

keywords=js
```

## Transfer-Encoding: chunked  
```js
没有 chunked
HTTP/1.1 200 OK
Date: Mon, 11 May 2020 12:52:48 GMT
Connection: keep-alive

ok

```

```js
浏览器得到 响应报文：
HTTP/1.1 200 OK
Date: Mon, 11 May 2020 12:52:48 GMT
Connection: keep-alive

10： 长度
1234567890
9：
123456789
0

// 后面没内容了
```
