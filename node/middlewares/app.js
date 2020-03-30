const Koa = require('koa')
const app = new Koa()
const routing = require('./routes')

routing(app)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})