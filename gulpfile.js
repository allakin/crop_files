var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var clean    = require('gulp-clean');

gulp.task('clean', function () {
     return gulp.src('./min')
        .pipe(clean());
});

gulp.task('imagemin', ["clean"], function () {
    return gulp.src('./source/**')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./min/'));
});

gulp.task('default', ['imagemin'], function () {
    gulp.watch(['source/**'], ['imagemin']);
});
