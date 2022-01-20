const path = require('path')

module.exports = {
  entry: './main.js',
  target: 'node', // support native modules
  // context: path.resolve(__dirname, 'src')
  output: {
    // filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: [
      __dirname + '/node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
        // use: {
        //   loader: "babel-loader"
        // }
      }
    ]
  }
}
