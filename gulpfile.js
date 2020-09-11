const gulp = require('gulp');
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const minifyImg = require('gulp-imagemin');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

function minCSS() {
  src('devStyles/sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

function imgMin() {
  return src('devImg/*')
    .pipe(minifyImg())
    .pipe(dest('dist/img'))
}

function jsMin() {
  return src('devJS/**/*.js')
    .pipe(jsmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/js'))
}

exports.watch = function() {
  browserSync.init({
    server: {
      baseDir: 'dist',
      index: 'index.htm',
      serveStaticOptions: {
        extensions: ["htm"]
      }
    }
  });

  gulp.watch('./devStyles/sass/**/*.scss', minCSS);
  gulp.watch('devImg/*', imgMin);
  gulp.watch('devJS/**/*.js', jsMin);
  gulp.watch('./dist/*.htm').on('change', browserSync.reload);
}
