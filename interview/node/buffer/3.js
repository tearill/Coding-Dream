const http = require('http');
// TCP 传输的是二进制
let hello = '';
for (var i = 0; i < 10240; i++) {
  hello += 'a';
}

// console.log(`Hello：${hello.length}`);
hello = Buffer.from(hello); // 性能优化 只执行依次

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(hello);
}).listen(8001)
