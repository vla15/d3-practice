const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  }
  // ,
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   })
  // ]
}