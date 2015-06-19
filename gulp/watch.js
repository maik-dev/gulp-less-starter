'use strict';

var gulp 		= require('gulp');
var less 		= require('gulp-less');

module.exports = function(app) {

	gulp.task('watch-html', ['html', 'reload']);
	gulp.task('watch-less', ['less', 'reload']);
	gulp.task('watch-js', ['js', 'reload']);

	gulp.task('watch', function(){
		gulp.watch(app.paths.watch.html, ['watch-html']);
		gulp.watch(app.paths.watch.js, ['watch-js']);
		gulp.watch(app.paths.watch.less, ['watch-less']);
	});

}