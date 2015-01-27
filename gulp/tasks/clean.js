'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    del = require('del');

gulp.task('clean', function() {
    return del.sync([config.dist]);
});
