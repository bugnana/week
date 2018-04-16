var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('connect', function() {
    connect.server({
        port: 8989,
        livereload: true
    })
});
// gulp.task('uglify', function() {
//     gulp.src('*.js')
//         .pipe(gulp.concat())
//     gulp.dest('/lib')
// })
gulp.task('index', function() {
    gulp.src('.', )
        .pipe(connect.reload())
});
gulp.task('watch', function() {
    gulp.watch('./index.html', './css/*.css', ['index'])
});
gulp.task('default', ['connect', 'watch'])