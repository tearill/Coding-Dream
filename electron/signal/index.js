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
      ws.sendData('logined', { code })
    } else if (event === 'controll') {
      let remote = data.remote // 想要控制的主机
      console.log(remote)
      if (code2ws.has(remote)) {
        ws.sendData('controlled', { remote }) // 已经控制了谁
        ws.sendRemote = code2ws.get(remote).sendData // 被控制的主机发送消息
        console.log(ws.sendRemote)
        ws.sendRemote('be-controlled', {
          remote: code // 被控制的主机信息
        })
      }
    }
    // ws.send('hello')
  })
})
