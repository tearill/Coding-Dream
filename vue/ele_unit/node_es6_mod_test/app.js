// const express = require('express') // ES5 支持的 CommonJS
import express from 'express'
const app = express() // 部分支持 ES6

app.listen("1234", () => {
  console.log('api 服务器上线了')
})
