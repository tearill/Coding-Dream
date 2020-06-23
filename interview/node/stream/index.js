const fs = require('fs');
const zlib = require('zlib'); // 压缩
// 文件较大的时候
const file = process.argv[2];
// console.log(file);
// 压缩文件
// I/O => 内存 => 处理 => 压缩 => 写回硬盘
// fs.readFile(file, (err, buffer) => {
  // 文件全读取完了 内存可能会不够
//   console.log(buffer);
//   zlib.gzip(buffer, (err, buffer) => {
//     fs.writeFile(file + '.gzip', buffer, err => {
//       console.log('File successfully compressed');
//     });
//   });
// });

// stream libuv 事件模型
fs
  .createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish',() => {
    console.log('File successfully compressed');
  })