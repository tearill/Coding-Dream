const express = require('express')
const router = require('./routes/index.js')
const app = express()

router(app)

app.listen(3000, () => {
  console.log('listening on port 3000')
})