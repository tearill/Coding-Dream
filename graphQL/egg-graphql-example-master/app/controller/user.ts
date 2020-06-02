import { Controller } from 'egg';

export default class UserController extends Controller {
  public async githubLogin() {
    console.log(this.ctx.query.code);
    const { config } = this.app;
    let res = await config.axios.post('https://github.com/login/oauth/access_token', {
      client_id: config.clientId,
      client_secret: config.clientSecret,
      code: this.ctx.query.code
    })
    console.log(res);
  }
}
