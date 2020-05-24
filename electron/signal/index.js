const WebSocket = require('ws')
const events = require('events')

const code2ws = new Map() // Map 维护了连接关系

const wss = new WebSocket.Server({
  port: 8010
})

console.log(wss instanceof events.EventEmitter)

wss.on('connection', function connection(ws, request) {
  // ws 每一个用户
  // console.log(ws)
  let code = Math.floor(Math.random() * (999999 - 100000)) + 100000
  code2ws.set(code, ws)

  ws.on('message', function incoming(message) {
    console.log('incoming ', message)
    ws.sendData = (event, data) => {
      ws.send(JSON.stringify({event, data}))
    }
    let parseMessage = {}
    try {
      parseMessage = JSON.parse(message)
    } catch(err) {
      ws.send('message invalid')
      console.log('parse message error')
    }
    let { event, data } = parseMessage
    console.log(event)
    if (event === 'login') {
      ws.sendData('logined', { code }) // 记录登录的主机
    } else if (event === 'control') {
      let remote = data.remote // 想要控制的主机 code

      console.log(remote, 'remote code') // 被控制的主机 code

      if (code2ws.has(remote)) { // 查询被控制的主机是否登录
        ws.sendData('controlling', { remote }) // 已经控制了谁

        console.log(code2ws.get(remote), '~~~~~~~~~~~') // code2ws.get(remote) 被控制的主机信息

        ws.sendRemote = code2ws.get(remote).sendData // 拿到被控制主机的 sendData 函数
        // console.log(ws.sendRemote)

        console.log(code, '------')

        ws.sendRemote('being-controlled', {
          remote: code // 被控制的主机 code
        })
      }
    }
    // {"event":"login"}
    // {"event":"control","data":{"remote":663636}}
    // ws.send('hello')
  })
})
