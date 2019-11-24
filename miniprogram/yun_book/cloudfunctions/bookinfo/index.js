// 云函数入口文件
var cloud = require('wx-server-sdk'); // 云服务器
var rp = require('request-promise'); // npm 包 api发送请求
cloud.init();

exports.main = async(event, context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=52b3a6fac803f4f2f870f583180eaa14`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=52b3a6fac803f4f2f870f583180eaa14`)
          .then(html => {
            return html;
          });
  return res;
}