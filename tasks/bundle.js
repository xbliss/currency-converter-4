import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'

export function bundle (cb) {
  const config = Object.create(webpackConfig)
  return webpack(config, (err, status) => {
    if (err) throw new Error('webpack', err)
    cb()
  })
}
