// 主进程
const cp = require('child_process'); // 创建子进程
const child_process = cp.fork(__dirname + '/child.js'); // fork 挂起新的进程(启动子进程)
// 公司 
child_process.send('haha'); // 有些耗时的任务要交给他
child_process.on('message', (str) => {
    console.log('parent', str);
})