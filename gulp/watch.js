'use strict';

var gulp = require('gulp');

gulp.task('watch', ['injector:css', 'injector:js'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss', ['injector:css']);
  gulp.watch('src/{app,components}/**/*.js', ['injector:js']);
  gulp.watch('src/assets/images/**/*', ['images']);
});
