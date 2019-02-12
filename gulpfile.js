var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function () {
  return gulp.src('./src/assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./theme/assets/styles'));
});

gulp.task('scripts', function () {
  return gulp.src('./src/assets/scripts/site.js').pipe(gulp.dest('./theme/assets/scripts'));
})

gulp.task('watch', function () {
  gulp.watch('./src/assets/scss/*.scss', ['scss']);
  gulp.watch('./src/assets/scripts/*.js', ['scripts'])
});

gulp.task('default', [ 'scss', 'scripts' ]);