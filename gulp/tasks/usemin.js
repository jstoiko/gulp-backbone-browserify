'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');

gulp.task('usemin', function() {
    gulp.src(config.dist + 'index.html')
        .pipe(usemin({
            css: [minifyCss(), 'concat'],
            js: [uglify()]
        }))
        .pipe(gulp.dest(config.dist));
});
