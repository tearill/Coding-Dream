const Controller = require('egg').Controller;

class PostController extends Controller {
    async new() {
        // this.ctx.body = 'hi, post';
        // 渲染模板页面
        await this.ctx.render('new.tpl'); 
    }
    async create() {
        const { ctx } = this;
        let { title, body } = ctx.request.body; // 请求体
        // console.log(title, body);
        await ctx.service.post.newPost(title, body);
        // this.ctx.body = '在这里处理表单提交';
        ctx.redirect('/posts');
    }
    async index() {
        await this.ctx.render('index.tpl');
    }
}

module.exports = PostController;