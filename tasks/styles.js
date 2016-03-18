import gulp from 'gulp'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import livereload from 'gulp-livereload'
import atImport from 'postcss-import'
import copy from 'postcss-copy'
import cssnext from 'postcss-cssnext'

export function styles () {
  return gulp.src('src/styles/main.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      atImport(),
      copy({
        src: 'node_modules',
        dest: 'app',
        relativePath (dirname, fileMeta, result, opts) {
          return opts.dest
        }
      }),
      cssnext()
    ]))
    .pipe(sourcemaps.write())
    .pipe(rename('popup.css'))
    .pipe(gulp.dest('app/styles/'))
    .pipe(livereload())
}
