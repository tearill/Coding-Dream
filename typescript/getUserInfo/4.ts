// type 关键字 自定义函数类型
type IUserInfoFunc = (user: IUser) => string;

interface IUser {
  name: string,
  age: number
}

// 函数 全套马杀鸡
// 常量 js 类型由值决定，提前决定
// 原生 js 中声明和类型是分开的，ts 可以提前决定变量的类型，这也是 ts 难写的原因
const getUerInfo: IUserInfoFunc = (user) => {
  return `name: ${user.name}, ${user.age}`;
}

console.log(getUerInfo({name: 'Horace', age: 20}));