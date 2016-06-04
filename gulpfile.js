var gulp = require('gulp');

gulp.task('default', ['gen-precache']);

gulp.task('gen-precache', function () {
    return gulp
        .src(['data/**/*'])
        .pipe(require('gulp-filelist')('offline.json'))
        .pipe(require('gulp-filter')('offline.json', {restore: true}))
        .pipe(gulp.dest('gen'))
});