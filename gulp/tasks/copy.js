'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    merge = require('merge-stream');

gulp.task('copy', function() {

    var indexHtml = gulp.src(config.src + 'app/views/_index/index.html')
        .pipe(gulp.dest(config.dist));

    var libs = gulp.src(config.paths.libs, {base: './node_modules'})
        .pipe(gulp.dest(config.dist + config.javascript));

    var otherAssets = gulp.src([
            config.src + config.images + '/**',
            config.src + config.fonts + '/**'
        ], {base: config.src})
        .pipe(gulp.dest(config.dist));

    return merge(indexHtml, libs, otherAssets);
});
