# Node 考点  
- 在用 node 读取一个文件的时候，都发生了些什么  
  node API / IO 处理 / 异步  
  3 点，node 底层架构  

- 表层
  1. node 架构层  
    V8 / babel / webpack 抽象语法树 AST  
    中间层 => C++  
  2. 中间层 webkit 中间层  
    html5 调用摄像头/文件/存储  
  3. JS 可以用于什么场景，它的架构是什么  
    electron / chrome => chromium  
  4. 小程序 html => wxml css=> wxss  
  5. RN  

- node 底层实现架构  
  - 上层 API 设计  
    使用 fs 模块调用 node 的 API 层  
  - node.js Bindings 找到 C++ 对 fs 模块的实现  
  - node.js 底层，基于事件机制，node 中的 eventloop  
    libuv 内部封装了对 eventloop 的实现  
    c-ares 异步的 DNS 请求库  
    http_parser OPENSSL, zlib  
    libuv 是一个高性能、事件驱动的 I/O 库，并提供了跨平台(windows/linux) 的 API，异步、事件驱动的编程风格，核心使命是提供一个 event loop 定时器，基于 I/O 的和其他事件的回调函数，非阻塞的网络支持，异步文件系统访问子进程  

- JS 是单线程的，但是 libuv 并不是  

- 执行顺序 event loop  
  - event loop 在前后端的区别  
    事件驱动 + 循环事件栈  
    node 任务队列类型比较多  
    1. setTimeout/setTimeout => timer 栈  
    2. I/O 操作 => poll 栈  
    3. setImmediate => check 栈  
    timer 栈 => poll 栈 => check 栈  
  - node 版本不一样 => 不一样的结果  
    前端及传统的 node v11 之前，每次执行某一阶段所有宏任务 setTimeout、setInterval，才会去检查微任务队列  
    node v11 之后，timer 阶段发生改变，执行一个宏任务就去执行微任务队列，和浏览器端的实现一致了 => libuv 的功劳  
