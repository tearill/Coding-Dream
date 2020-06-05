const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const moment = require('moment');
const QRCodeNode = require('qrcode');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { QRCodeModel, UserModel } = require('./models');

const app = express();
const port = 8888;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

// 将 token 解码
function decryptToken(token, secret) {
  try {
    let res = jwt.verify(token, secret);
    return res;
  } catch (err) {
    console.error(err);
    return false;
  }
}

// 鉴权中间件
const authenticated = async (req, res, next) => {
  // console.log('鉴权 - 判断登录');
  // 扫码之后验证 token
  const authorationToken = req.headers['authorization'];
  console.log(authorationToken);
  const decode = decryptToken(authorationToken, 's3cret');
  console.log(decode, '----decode');
  if (!decode) {
    res.send({
      code: 403,
      message: '请先登录'
    });
    return;
  }

  // 已通过 token 的验证
  // 给请求对象加点信息
  req.logged = true;
  req.user = {
    userId: decode.data.userId,
    username: decode.data.username,
    avatar: decode.data.avatar,
    token: authorationToken
  }
  await next();
}

// jwt 生成 token
function generateToken(data, secret) {
  let iat = Math.floor(Date.now() / 1000); // 生成时间
  let exp = Math.floor(Date.now() / 1000) + 60*60*24*15; // 有效期 15 天
  // jsonwebtoken 将一个 JSON 对象变成 web 登录 token
  let token = jwt.sign( // 给 PC 端
    {
      data,
      iat,
      exp
    },
    secret
  );
  return token;
}

app.get('/', (req, res) => {
  res.end('index');
})

// 二维码生成接口
app.get('/qrcode/gene', async (req, res) => {
  // qrcode_id
  const qrcode = new QRCodeModel({
    createdAt: Date.now(),
    expireAt: moment(Date.now()).add(120, 's').toDate() // 120s 后过期
  })
  await qrcode.save();

  let qrcodeData = {
    qrcodeId: qrcode._id,
    createdAt: qrcode.createdAt,
    expireAt: qrcode.expireAt
  }

  // base64
  const qrcodeUrl = await QRCodeNode.toDataURL(JSON.stringify(qrcodeData));
  console.log(qrcode);
  res.send({
    code: 200,
    message: '二维码生成成功',
    data: {
      qrcodeUrl,
      qocodeId: qrcode._id
    }
  })
})

// postman 模拟 app 扫码
app.post('/qrcode/scanned', authenticated, async (req, res) => {
  console.log('已扫码----------', req.logged);
  // 扫码传递 token
  // 被 authenticated 鉴权中间件验证完之后再回来
  let { qrcodeId } = req.body;
  console.log(qrcodeId, '----qrcodeId');
  const qrcode = await QRCodeModel.findOne({ _id: qrcodeId }); // 查询 qrcode

  if (!qrcode) { // 判断 qrcode 是否有效
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    });
    return;
  }

  await QRCodeModel.findOneAndUpdate({ _id: qrcodeId }, { // 找到并更新二维码信息
    scanned: true,
    userInfo: {
      username: req.user.username,
      avatar: req.user.avatar
    }
  });

  res.send({
    code: 200,
    message: '扫描成功'
  })
})

// 手机端确认授权/登录
app.post('/qrcode/confirm', authenticated, async (req, res) => {
  // status 1
  // token
  const { qrcodeId } = req.body;
  const qrcode = await QRCodeModel.findOne({ _id: qrcodeId });
  if (!qrcode) {
    res.send({
      code: 2241,
      message: "二维码不存在",
      data: null
    })
    return;
  }

  await QRCodeModel.findOneAndUpdate({ _id: qrcodeId }, {
    status: 1,
    userInfo: req.user
  });
  res.send({
    code: 200,
    message: '登录成功'
  })
})

// 手机端取消授权/登录
app.post('/qrcode/cancel', async () => {
  
})

app.get('/qrcode/check', async (req, res) => {
  const { qrcodeId } = req.query;
  const qrcode = await QRCodeModel.findOne({ _id: qrcodeId })
  
  if (!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    });
    return;
  }

  res.send({
    code: 200,
    message: '查询二维码状态成',
    data: {
      qrcodeId,
      scanned: qrcode.scanned,
      expired: moment() > moment(qrcode.expireAt),
      success: qrcode.status === 1,
      canceled: qrcode.status === -1,
      status: qrcode.status,
      userInfo: qrcode.userInfo
    }
  })
})

// 注册
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  // console.log(username, password);
  if ((await UserModel.findOne({username, password}))) {
    res.send({
      code: 500,
      message: '用户名已被注册'
    });
    return;
  }

  const user = new UserModel({
    username,
    password,
    avatar: '￼https://usercontents.authing.cn/authing-avatar.png'
  })
  await user.save();

  res.send({
    code: 200,
    message: '注册成功'
  });
})

// 登录
app.post('/login', async (req, res) => {
  const {username, password} = req.body;

  const user = await UserModel.findOne({
    username,
    password
  });

  if (!user) {
    res.send({
      code: 403,
      message: '用户名或密码不正确'
    });
    return;
  }

  // 分配 token 令牌 -> localStorage
  // uid + 加密 -> token -> 服务端 decode uid 只有服务器才能解开
  const token = generateToken({ userId: user._id, username, avatar: user.avatar }, 's3cret');
  res.send({
    code: 200,
    message: '登录成功',
    data: {
      _id: user._id,
      username,
      token
    }
  })
})

connect();

function listen() {
  app.listen(port);
  console.log('Listening on port ' + port);
}

function connect() {
  mongoose.connection
    .on('errot', console.log)
    .on('disconnected', connect)
    .once('open', listen)
  return mongoose.connect('mongodb://localhost:27017/scan-qrcode', {
    keepAlive: 1,
    useNewUrlParser: true
  })
}
