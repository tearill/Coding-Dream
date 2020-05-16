# React concurrent  
## 渲染进程  
- js  
- UI 渲染  
互斥，JS 执行时，UI 渲染会停下  
js 一直抢占着执行权  

问题：js 执行时间太长  

react：fiber -> 让 js 可以暂停、终止或重新启动  
一帧中先进行 Layout、Paint，如果有多余的时间就执行 js 部分(RIC RequestIdleCallback -> 检查剩余时间)  

react  
- 交互(事件)  
- js  
- 内部 setState  
- DOM Diff  

任务优先级排比  

以前：js -> 想执行多久就执行多久  
Cooperative Scheduling：js 和 浏览器站在用户角度，相互合作  