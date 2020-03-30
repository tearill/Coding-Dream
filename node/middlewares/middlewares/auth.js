let isLogin = false
module.exports = (ctx, next) => {
  if (!isLogin) {
    ctx.redirect('/login')
  } else {
    next()
  }
} 