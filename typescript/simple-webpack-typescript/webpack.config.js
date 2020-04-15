const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/app.ts'
  },
  output: {
    publicPath: __dirname + '/dist/', // webpack-dev-server 8080
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 可以支持 tsx
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}