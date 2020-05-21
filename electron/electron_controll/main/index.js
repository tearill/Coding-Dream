let { app, BrowserWindow } = require('electron') // node 端运行

let win
app.on('ready', () => {
  win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    }
  }) // chrominum 启动 桌面的代表就是窗口
  // win.loadFile('./index.html')
  win.loadURL('http://localhost:3000')
})
