var path = require('path')
var webpack = require('webpack')
var TransferWebpackPlugin = require('transfer-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  //Config options on how to interpret requires imports
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    //Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    //Moves files
    new TransferWebpackPlugin([ { from: 'www' } ], __dirname),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?root=."
      }
    ]
  }
}
