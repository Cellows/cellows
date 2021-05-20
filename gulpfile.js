'use strict';

var gulp = require('gulp');
var sass = require('gulp-dart-sass');

gulp.task('build-css', function () {
  return gulp.src('./projects/core/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/core'));
});

gulp.task('move-icon-fonts', function () {
  return gulp.src('./projects/core/styles/abstracts/iconfont/fonts/**/*.*')
    .pipe(gulp.dest('./dist/core/iconfont/fonts'));
});

gulp.task('move-assets', function () {
  return gulp.src('./projects/core/assets/**/*.*')
    .pipe(gulp.dest('./dist/core/assets'));
});

gulp.task('build-assets', gulp.series('build-css', 'move-icon-fonts', 'move-assets'));
