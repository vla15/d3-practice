const gulp = require('gulp');

//gulp.task 
//gulp.src input
//gulp.dest destination output
//gulp.watch watches files


gulp.task('message', () => {
  return console.log('Gulp is running...');
})

gulp.task('copyHtml', () => {
  gulp.src('client/src/*.html')
    .pipe(gulp.dest('client/dist'))
})

gulp.task('default', () => {
  console.log('yoooo');
})