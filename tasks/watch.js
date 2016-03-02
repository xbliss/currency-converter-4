import gulp from 'gulp'
import { styles } from './styles'
import { bundle } from './bundle'

export function watch () {
  gulp.watch('src/styles/**/*.*', styles)
  gulp.watch('src/scripts/**/*.*', bundle)
}
