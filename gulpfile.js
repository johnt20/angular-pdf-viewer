var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var colors = require('colors');
var minifycss = require('gulp-minify-css');

gulp.task('build', function () {
    gulp.src([
        './src/js/dragscroll.js',
        './src/js/delegate-service.js',
        './src/js/pdf-viewer-delegate.js',
        './src/js/pdf-ctrl.js',
        './src/js/pdf-viewer-toolbar.js',
        './src/js/pdf-viewer.js'
        
    ])
        .pipe(concat('angular-pdf-viewer.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));

    gulp.src([
        './src/css/basscss.css'
    ])
        .pipe(concat('angular-pdf-viewer.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('dev', function () {
    // Start a server
    connect.server({
        root: '',
        port: 3000,
        livereload: true
    });
    console.log('[CONNECT] Listening on port 3000'.yellow.inverse);

    // Watch HTML files for changes
    console.log('[CONNECT] Watching HTML, JS and CSS files for live-reload'.blue);
    watch({
        glob: ['./src/**/*.*']
    }).pipe(connect.reload());
});