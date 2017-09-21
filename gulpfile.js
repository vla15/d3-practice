const gulp = require('gulp');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream')

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

// gulp.task('minify', () => {
//   return gulp.src('client/src/*.js')
//   .pipe(webpack(require('./webpack.config.js')))
//   .pipe(uglify())
//   .pipe(gulp.dest('client/src/dist'))
// })




//minify bundle.js file
// gulp.task('scripts', () => {
//   gulp.src('client/src/bundle.js')
//   .pipe(uglify())
//   .pipe(gulp.dest('client/dist'))
// })

// gulp.task('watch', [scripts])