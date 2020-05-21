let { app, BrowserWindow } = require('electron') // node 端运行

let win
app.on('ready', () => {
  win = new BrowserWindow() // chrominum 启动 桌面的代表就是窗口
  win.loadFile('./index.html')
})