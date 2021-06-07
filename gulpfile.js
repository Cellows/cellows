'use strict';

var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var sassUnicode = require('gulp-sass-unicode');

gulp.task('build-css', function () {
  return gulp.src('./projects/core/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sassUnicode().on('error', sass.logError))
    .pipe(gulp.dest('./dist/core'));
});

gulp.task('move-fonts', function () {
  return gulp.src(['./projects/core/styles/abstracts/fonts/**/*.*', './projects/core/styles/vendor/fontawesome/fonts/**/*.*'])
    .pipe(gulp.dest('./dist/core/fonts'));
});

gulp.task('move-assets', function () {
  return gulp.src('./projects/core/assets/**/*.*')
    .pipe(gulp.dest('./dist/core/assets'));
});

gulp.task('build-assets', gulp.series('build-css', 'move-fonts','move-assets'));
