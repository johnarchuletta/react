const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  entry: './react/app.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // plugins: [
  //   new UglifyJSPlugin({
  //     sourceMap: true
  //   })
  // ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'static/app')
  }
}