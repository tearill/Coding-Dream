// interface
// model / memberEntity
// 基础类型，在多个地方会使用到的时候
// user 实现了 IUser 一样的属性和方法的对象，接口
interface IUser {
  name: string;
  age: number;
}
const getUserInfo = (user: IUser): string => {
  // if (true) {
  //   return 123;
  // }
  return `name: ${user.name}, age: ${user.age}`;
}

getUserInfo({name: 'Horace', age: 20})