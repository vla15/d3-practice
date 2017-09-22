const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new JavaScriptObfuscator ({
      rotateUnicodeArray: true
    },
      ['bundle.js'])
  ]
  // ,
  // plugins: [
  //   new UglifyJSPlugin
  // ]
}