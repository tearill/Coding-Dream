import { Context } from 'egg'; // 上下文对象

export default class UtilsConnector{
  ctx: Context;

  constructor(ctx: Context) {
    this.ctx = ctx;
  }

  public githubURL() { // 提供查询结果
    const { login_url, client_id, scope } = this.ctx.app.config.github; // 去配置中取 github 相关配置
    console.log(login_url, client_id, scope);
    return `${login_url}?client_id=${client_id}&scope=${scope}&state=${Date.now()}`;
  }
}