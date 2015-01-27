'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(cb) {
    runSequence(
        'clean',
        'copy',
        'styles:prod',
        'browserify',
        'usemin',
        cb
    );
});
