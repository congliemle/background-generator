var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify-es').default;

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    watch('./app/index.html', function() {
        browserSync.reload();
    });

    watch('./app/app.js', function() {
        browserSync.reload();
    });

    watch('./app/style.css', function() {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', function() {
    return gulp.src('./app/style.css')
        .pipe(browserSync.stream());
});

gulp.task('deleteDistFolder', function() {
    return del('./docs');
});

gulp.task('usemin', ['deleteDistFolder'], function() {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [function() {return rev()}, function() {return cssnano()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest('./docs'))
});

gulp.task('build', ['deleteDistFolder', 'usemin']);

gulp.task('previewDist', function() {
    browserSync.init({
        server: {
            baseDir: 'docs'
        }
    });
});