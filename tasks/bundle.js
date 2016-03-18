import gulp from 'gulp'
import webpack from 'webpack-stream'
import named from 'vinyl-named'

export function bundle () {
  return gulp.src(['src/scripts/popup.js', 'src/scripts/background.js'])
    .pipe(named())
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(gulp.dest('app/scripts/'))
}
