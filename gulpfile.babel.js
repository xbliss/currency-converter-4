import gulp from 'gulp'
import del from 'del'
import webpack from 'webpack-stream'

// gulp plugins
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import livereload from 'gulp-livereload'

// postcss plugins
import atImport from 'postcss-import'
import copy from 'postcss-copy'
import cssnext from 'postcss-cssnext'

gulp.task('styles', () => {
  return gulp.src('src/styles/main.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      atImport(),
      copy({
        src: 'node_modules',
        dest: 'src',
        keepRelativePath: false
      }),
      cssnext()
    ]))
    .pipe(sourcemaps.write())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('src'))
})

gulp.task('bundle', () => {
  return gulp.src('src/scripts/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('src'))
})

gulp.task('watch', () => {
  gulp.watch('src/styles/**/*.*', gulp.series('styles', 'reload'))
  gulp.watch('src/scripts/**/*.*', gulp.series('bundle', 'reload'))
})

gulp.task('reload', () => {
  return livereload.reload()
})

gulp.task('clean', () => {
  return del(['.tmp', 'dist'])
})

gulp.task('build', gulp.series('styles', 'bundle'))
