exports.getSignin = async (ctx) => {
    // ctx.body = 'form'
    await ctx.render('signin', {
        
    })
}

exports.postSignin = async (ctx) => {
    ctx.body = {
        mes: '登录成功'
    }
} 