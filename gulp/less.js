'use strict';

var gulp 		= require('gulp');
var less 		= require('gulp-less');
var sourcemaps 	= require('gulp-sourcemaps');

module.exports = function(app) {

	gulp.task('less', function(){
		gulp.src(app.paths.less.src)
			.pipe(sourcemaps.init())
			.pipe(less()).on('error', app.logger.error('Less'))
			.pipe(sourcemaps.write('./maps'))
			.pipe(gulp.dest(app.paths.less.dest));
	});

}