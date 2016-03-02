import gulp from 'gulp'
import webpack from 'webpack-stream'
import livereload from 'gulp-livereload'

export function bundle () {
  return gulp.src('src/scripts/main.js')
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(gulp.dest('src'))
    .pipe(livereload())
}
