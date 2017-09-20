const path = require('path')

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  }
}