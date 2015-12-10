var gulp 	= require('gulp');
var sass 	= require('gulp-sass');
var minify 	= require('gulp-minify-css');
var exec 	= require('child_process').exec;

gulp.task('default', function(){

	// compile sass
	gulp.src('default.scss')
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest('dist/'));

	// run the script
	exec('node index.js', function(err){
		console.log(err);
	});
});
