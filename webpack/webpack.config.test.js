const cssnext = require('postcss-cssnext')

module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  },
  postcss () {
    return [cssnext]
  }
}
