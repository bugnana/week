var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
gulp.task('connect', function() {
    connect.server({
        port: 8989,
        livereload: true
    })
});
gulp.task('index', function() {
    gulp.src('.')
        .pipe(connect.reload())
});
gulp.task('watch', function() {
    gulp.watch('index.html', ['index'])
});
gulp.task('default', ['connect', 'watch'])