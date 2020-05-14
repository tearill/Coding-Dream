// const http = require('http')
// http.request({
//   headers: {},
//   url: {}
// })

const fs = require('fs')
const net = require('net')
const client = net.createConnection({
  port: 8088
}, () => {
  // 请求报文
  client.write('POST / HTTP/1.1\r\n')
  client.write('HOST: 127.0.0.1\r\n')
  client.write('Content-Length: 7\r\n')
  client.write('Content-Type: application/x-www-form-urlencoded\r\n')
  client.write('\r\n')
  client.write('abc=456')
})

// 响应报文
// 分段
client.on('data', (data) => {
  // console.log(data.toString());
  parser.receive(data.toString())
})

client.on('end', (data) => {
  console.log('disconnect')
})

// const write = fs.createWriteStream('./res.txt')
// client.pipe(write)

class ResponseParser {
  constructor() {
    this.WAIT_STATUS_LINE = 0
    this.WAIT_STATUS_LINE_END = 1
    this.WAIT_HEADER_NAME = 2
    this.WAIT_HEADER_SPACE = 3
    this.WAIT_HEADER_VALUE = 4
    this.WAIT_HEADER_LINE_END = 5
    this.WAIT_HEADER_BLOCK_END = 6
    this.currentState = this.WAIT_STATUS_LINE

    this.statusLine = ''
    this.headerName = ''
    this.headerValue = ''
    this.headers = {} // 
  }
  receive(string) {
    for (let i = 0; i < string.length; i++) {
      this.receiveChar(string[i])
    }
  }
  receiveChar(char) { // 每个字符
    if (this.currentState === this.WAIT_STATUS_LINE) {
      // 默认第一个状态/字符 一定属于状态行
      if (char === '\r') {
        this.currentState = this.WAIT_STATUS_LINE_END
      } else {
        this.statusLine += char
      }
    } else if (this.currentState === this.WAIT_STATUS_LINE_END) {
      if (char === '\n') {
        this.currentState = this.WAIT_HEADER_NAME
      }
    } else if (this.currentState === this.WAIT_HEADER_NAME) {
      // 请求头/响应头
      if (char === ':') {
        this.currentState = this.WAIT_HEADER_SPACE
      } else if (char === '\r') {
        this.currentState = this.WAIT_HEADER_BLOCK_END
      } else {
        this.headerNamw += char
      }
    } else if (this.currentState === this.WAIT_HEADER_SPACE) {
      if (char === ' ') {
        this.currentState = this.WAIT_HEADER_VALUE
      }
    } else if (this.currentState === this.WAIT_HEADER_VALUE) {
      if (char === '\r') {
        // headerValue
        this.headers[this.headerName] = this.headerValue
        this.headerName = ''
        this.headerValue = ''
        this.currentState = this.WAIT_HEADER_LINE_END
      } else {
        this.headerValue += char
      }
    } else if (this.currentState === this.WAIT_HEADER_LINE_END) {
      if (char === '\n') {
        this.currentState = this.WAIT_HEADER_NAME
      }
    } else if (this.currentState === this.WAIT_HEADER_BLOCK_END) {
      console.log(this.headers)
      console.log(JSON.stringify(char))
    }
  }
}

let parser = new ResponseParser()
