var
  gulp = require('gulp'),
  path = require('path'),
  connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
  root: [path.resolve('.')],
  port: 3000,
  livereload: true
}));

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);