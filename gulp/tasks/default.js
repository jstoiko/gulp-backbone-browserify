'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    global.isWatching = true;

    runSequence(
        'clean',
        'copy',
        'styles:dev',
        'lint',
        'browserify',
        'browser-sync',
        'watch',
        cb
    );
});
