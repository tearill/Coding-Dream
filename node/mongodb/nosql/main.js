// var express = require('express'); // node 开发框架
// // 异步无阻塞 node 可以支持更高的并发
// // 启动一个webapp
// const app = express();
// app.get('/', (req, res) => res.send('hello world'));
// app.listen(3000, () => {
//     console.log('Example app listening on port 3000!');
// });

const express = require('express');
//模板引擎
const ejs = require('ejs');
const app = express();
var MongoClient = require('mongodb').MongoClient;
// mongodb 连接是用mongodb:// 协议来  27017端口
// mysql 3306
var url = 'mongodb://192.168.31.128:27017/runoob';
var dbbase;
MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) {
    throw err;
  }
  // console.log('数据库已创建！');
  dbbase = db.db("runoob");
  // console.log(dbbase);
});
app.get('/', (req, res) => {
  dbbase.collection("cg_site")
    .find({"name":"Horace"})
    .toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      // db.close();
      ejs.renderFile("views/index.html", {
        title: 'hello',
        items: result
      }, function(err, data) {
        res.end(data);
      })
    })
})
app.listen(1314);