var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
// var cssimport = require("gulp-cssimport");
// var options = {
// 	matchPattern: "*.css" // process only css 
// };

gulp.task('default', function() {
 //  gulp.src("./source/style.css")
	// .pipe(cssimport(options))
	// .pipe(gulp.dest('./build/'));
  return browserify('./source/app.js')
    	.transform(babelify)
    	.bundle()
    	.pipe(source('snapterest.js'))
    	.pipe(gulp.dest('./build/'));
});

