export default {
  Query: {
    async githubURL(__root: any, {}, { connector }) {
      return await connector.utils.githubURL(); // 调用 utils 模块下 UtilsConnector 类的 githubURL 方法
    }
  }
}
