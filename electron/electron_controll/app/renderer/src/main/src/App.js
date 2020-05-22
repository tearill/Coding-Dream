import React, { useState, useEffect } from 'react'
import './App.css'
// IPC 进程间通信
import { ipcRenderer, remote } from 'electron'
const { Menu, MenuItem } = remote

function App() {
  const [localCode, setLocalCode] = useState('')
  const [controllText, setControllText] = useState('')

  const login = async () => {
    let code = await ipcRenderer.invoke('login')
    setLocalCode(code)
  }

  useEffect(() => {
    login()
    return () => {
      console.log('unMount')
    }
  }, ['localCode'])

  const handleContextMenu = (e) => {
    e.preventDefault()
    const menu = new Menu()
    menu.append(new MenuItem({
      label: '复制',
      role: 'copy'
    })) // 添加菜单项
    menu.append(new MenuItem({
      label: '分享到微信',
      click: (menuItem, win, keyboardEvent) => {
        ipcRenderer.send('share-to-wechat', '111111')
      }
    }))
    menu.popup()
  }

  return (
    <div className="App">
      {
        controllText === '' ? <>
          <div>你的控制码</div>
          <span>{localCode}</span>
        </> : 
        <div>{controllText}</div>
      }
    </div>
  )
}

export default App
