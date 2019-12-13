exports.getPosts = async ctx => {
    // 中间件处理函数
    // ctx.body = {
    //     posts: []
    // }
    await ctx.render('posts', {
        
    })
}

exports.getRedirectPosts = async ctx => {
    ctx.redirect('/posts');
}