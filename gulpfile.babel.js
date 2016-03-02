import gulp from 'gulp'
import { styles, bundle, clean, watch } from './tasks'

gulp.task(styles)
gulp.task(bundle)
gulp.task(clean)
gulp.task(watch)

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, bundle)
  )
)

gulp.task('default', gulp.series('build', watch))
