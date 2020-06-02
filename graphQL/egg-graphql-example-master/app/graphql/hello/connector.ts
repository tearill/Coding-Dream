export default class HelloConnector {
  hellos() { // 对应查询的数据
    return [
      {
        id: 1,
        name: 'Jack',
      },
      {
        id: 2,
        name: 'Lucy',
      },
      {
        id: 3,
        name: 'Horace',
        job: 'ByteDance'
      },
    ];
  }
}
