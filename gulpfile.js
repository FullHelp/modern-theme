var sass = require('gulp-sass');
const { src, dest, watch, series } = require('gulp');

function scss () {
  return src('./src/assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./theme/assets/styles'));
}

function scripts () {
  return src('./src/assets/scripts/site.js').pipe(dest('./theme/assets/scripts'));
}

exports.default = series(scss, scripts);

exports.watch = function () {
  watch('./src/assets/scss/*.scss', scss);
  watch('./src/assets/scripts/*.js', scripts);
} 