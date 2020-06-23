// 'hello' string
// 使用 Buffer 来存怎么做
// 数据包通讯，文件上传，压缩、流操作、位操作 => 二进制
// string => 转换成二进制再发送 Buffer Stream
// console.log(Buffer.from('hello'));

var array = 'hello'.split('').map((v) => {
  return '0x' + v.charCodeAt(0).toString(16)
})

console.log(array);

const buf = new Buffer(array);
console.log(buf);
console.log(buf.toString());
