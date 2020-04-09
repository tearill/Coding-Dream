const fs = require('fs');
const join = require('path').join;

function findSync(startPath) {
  let result = [];
  function finder(path) {
    let files = fs.readdirSync(path);
    files.forEach((val, index) => {
      let fPath = join(path, val); // 加上当前文件/目录名
      let stats = fs.statSync(fPath); // 文件的状态信息
      if (stats.isDirectory()) finder(fPath);// 如果是目录，递归读取
      if (stats.isFile()) result.push(fPath); // 如果是文件，直接放进数组里
    })
  }
  finder(join(process.cwd(), startPath));
  return result;
}

exports.findSync = findSync;