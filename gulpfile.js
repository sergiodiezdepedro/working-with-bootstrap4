const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');
    purify = require('gulp-purifycss');

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);

});

gulp.task('sass', function () {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
gulp.task('cssprod', function () {
    return gulp.src("css/*.css")
        .pipe(purify(['./js/*.js', './*.html'], {
            minify: true
        }))
        .pipe(gulp.dest("css"));
});