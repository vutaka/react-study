const path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'output.js',
    path: path.join(__dirname, '/build')
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
}