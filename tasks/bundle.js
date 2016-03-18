import gulp from 'gulp'
import webpack from 'webpack-stream'
import named from 'vinyl-named'

export function bundle () {
  return gulp.src(['src/popup/index.js', 'src/background/index.js'])
    .pipe(named())
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(gulp.dest('app/scripts/'))
}
