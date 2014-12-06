'use strict';

var gulp = require('gulp');

gulp.task('watch', ['injector:css'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss', ['injector:css']);
  gulp.watch('src/assets/images/**/*', ['images']);
});
