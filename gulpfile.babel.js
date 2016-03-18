import gulp from 'gulp'
import { bundle, clean, watch } from './tasks'

gulp.task(bundle)
gulp.task(clean)
gulp.task(watch)

gulp.task('build', gulp.series(
    clean,
    bundle
  )
)

gulp.task('default', gulp.series('build', watch))
