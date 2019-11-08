const TULING = require('tuling');

const aiTuling = new TULING({
    key: 'af428084e0fd4153926fe24a5a147a97'
});
// 立即执行函数
(async () => {
    // 机器人
    // console.log('arrow function')
    const result = await aiTuling.send({
        userid: 1,
        info: '今天的天气',
        loc: '南昌市'
    });
    console.log(result);
})()
// console.log(typeof(func));
// func();