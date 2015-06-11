var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var browserSync = require('browser-sync').create();
var config = require('./gulp.config')();
var sass = require('gulp-sass');
var converter = require('sass-convert');
var sassdoc = require('sassdoc');


// Static Server 
gulp.task('browser-sync', function () {
    browserSync.init({
        server: "./"
        });
});

//Compile Sass into CSS & Auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(config.sass)
    .pipe($.plumber({
    errorHandler: function(err) {
    // display the error message
    console.log(err);
    // end the errored task
    this.emit('end') }
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dist))
    .pipe(browserSync.stream());
});

// Semi Working Workflow
gulp.task('default', ['browser-sync'], function() {
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.html).on('change', browserSync.reload);
    gulp.watch(config.alljs).on('change', browserSync.reload);
});


 