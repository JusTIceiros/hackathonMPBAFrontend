var gulp = require('gulp');
var terser = require('gulp-terser');
var pump = require('pump');

gulp.task('compress', function (cb) {
  pump([
        gulp.src('www/*.js'),
        terser(),
        gulp.dest('www/')
    ],
    cb
  );
});

// Default Task
gulp.task('default', ['compress']);
