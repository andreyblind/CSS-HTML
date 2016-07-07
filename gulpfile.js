var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('default', function () {
	return gulp.src('src/style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist'));
});