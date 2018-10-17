var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("./src/sass/bootstrap/bootstrap.scss", ['sass']);
  gulp.watch("./src/sass/custom/style.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['./src/sass/bootstrap/bootstrap.scss', './src/sass/custom/style.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

