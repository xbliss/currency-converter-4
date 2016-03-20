var webpack = require('webpack')
var cssnext = require('postcss-cssnext')

module.exports = {
  entry: {
    background: './src/background/index.js',
    popup: './src/popup/index.js'
  },
  output: {
    path: 'app/scripts',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sss$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss'
      }
    ]
  },
  postcss: function () {
    return [cssnext]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
