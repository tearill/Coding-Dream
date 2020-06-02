export default {
  Query: { // 向外提供查询
    hellos(_root: any, {}, { connector }) {
      return connector.hello.hellos();
    },
  },
};
