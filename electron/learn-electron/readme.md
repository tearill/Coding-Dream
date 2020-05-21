# electron 学习  
js 在 exe 的应用  

1. Chrome navigator.userAgent 中为什么有 mozilla 字段？  
  Mozilla 开拓了浏览器内置 devtool  

用 web 技术做桌面应用，开发效率快  

浏览器的进化历史  
1. 1989 互联网诞生  
2. 1990 Nexus 不能显示图片 HTTP0.9  
3. 1993 NSCA 看到图片  
4. 1994 网景 NetScape Mozilla  
  iframe 支持 嵌入第三方页面，商业广告  
  网管、运维  
  服务器端根据 userAgent HTTP1.0 Mozilla 推出 iframe 页面  
  NSCA 返回不带 iframe 的页面  
5. 1994 IE 浏览器 Win95 在自己的 userAgent 中加入 Mozilla 的声明  
  JavaScript 诞生  
6. 2002 新版本 Mozilla 诞生，基于 firefox  
7. 2008 基于 firefox，chrome 简洁、多进程快速稳定，10 倍速的 V8 引擎  
8. 2009 Ryan Dahl 基于 V8 引擎(JS 的解析) c++ 硬件/设备驱动 非阻塞 IO  
9. 2011 英特尔王文睿 node-webkit  
10. 2012 electron  
  electron = chromium(UI) + node(系统 fs net 底层操作能力 npm 拓展) 桌面应用 + NativeAPI(跨平台)  
  windows linux 右键赋值，不同操作系统的兼容性 能力再一次延申  
11. 移动互联网 React/Vue DOM API 性能、代码复用  
  React Native / Flutter / uniapp 混合开发 一门语言做两个平台(代码复用) IOS/Android  

electron 项目架构  
  React/Vue  
  Native API  
