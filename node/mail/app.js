const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'qq', //腾讯
  port: 465, //接口
  secureConnection: true,
  auth: {
    user: '1105317666@qq.com',
    pass: 'keittvljqnnzgcji'
  }
})

let mailOptions = {
  from: "光棍节前的呐喊<1105317666@qq.com>",
  to: "3273729545@qq.com",
  subject: '双11买什么？',
  html: '<b>淘宝京东拼多多</b>'
}

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message send: %s', info.messageId);
})