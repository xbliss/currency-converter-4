var cssnext = require('postcss-cssnext')
var postcssImport = require('postcss-import')

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
        test: /\.sss$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss?parser=sugarss'
      }
    ]
  },
  postcss: function (webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      cssnext
    ]
  }
}
