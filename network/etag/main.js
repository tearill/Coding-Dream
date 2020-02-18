// 计算机网络 缓存
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/' || req.url === '' || req.url === '/index.html') {
        // 读取 index.html 通过 http 响应发送给客户端
        // http -> 一种应答模式
        fs.readFile('./index.html', function (err, file) {
            res.setHeader('Content-Type', 'text/html');
            res.setHeader('200', 'OK'); // 200 http 状态码
            res.end(file);
        })
    } else if (req.url === '/cache.jpeg') {
        fs.readFile('./cache.jpeg', function (err, file) {
            // file
            // 判断用户的请求头中是否带有 if-none-match
            if (!req.headers['if-none-match']) {
                // 用户第一次请求 使用文件完整的带宽
                // 1. 第一次请求
                res.setHeader('Content-Type', 'images/jpeg');
                res.setHeader('200', 'OK'); // 200 http 状态码
                // etag 发送给客户端作为文件的标识，未来如果文件修改了，发一个新的
                res.setHeader('Etag', 'ffff');
                res.end(file);
            } else {
                // 2. 后续请求 用户的请求头中带有 If-None-Match  
                if (req.headers['if-none-match'] == 'ffff') { // 文件没变
                    // 告诉浏览器没有修改 -> 状态码 304 文件没有修改
                    res.writeHead('304');
                    res.end(); // 省带宽
                } else {
                    res.setHeader('Content-Type', 'images/jpeg');
                    res.setHeader('Etag', 'ffff');
                    res.writeHead('200', 'OK');
                    fs.end(file);
                }
            }
        })
    }
}).listen(8888);