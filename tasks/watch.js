import gulp from 'gulp'
import { bundle } from './bundle'

export function watch () {
  gulp.watch('src/**/*.*', bundle)
}
