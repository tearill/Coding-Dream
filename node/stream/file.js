const fs = require('fs')
fs.readFile('./readme.md', (err, info) => {
  fs.writeFile('./readme-copy.md', info, (err, info) => {
    if (!err) {
      console.log('copy success')
    }
  })
})

const readStream = fs.createReadStream('./readme.md')
const writeStream = fs.createWriteStream('./readme-copy.md')
readStream.pipe(writeStream)
