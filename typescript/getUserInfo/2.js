var getUserInfo11 = function (user) {
    // ts 弥补了 js 的不靠谱，引入了类型系统
    return "name: " + user.name + ", age: " + user.age;
};
// console.log(getUserInfo('asasa'));
// 中间过程会有意料不到的情况，例如从数据库里取出来的数据
// ts 感性写代码
console.log(getUserInfo({ name: "Horace", age: 20 }));
