'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    handleErrors = require('../utils/handle-errors');

try {
    var cssCompiler = require('gulp-'+config.cssCompiler);
} catch(e) {
    handleErrors(e);
}

gulp.task('styles:dev', function() {
    return gulp.src(config.src + '/**/*.'+config.cssSrcExtension)
        .pipe(sourcemaps.init())
        .pipe(cssCompiler())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dist + config.styles))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles:prod', function() {
    return gulp.src(config.src + '/**/*.'+config.cssSrcExtension)
        .pipe(cssCompiler())
        .pipe(concat('main.css'))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dist + config.styles));
});
