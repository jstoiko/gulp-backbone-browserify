'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    jshint = require('gulp-jshint'),
    handleErrors = require('../utils/handle-errors');

gulp.task('lint', function() {
    return gulp.src([
            config.src + 'app/views/**/*.js'
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .on('error', handleErrors);
});
