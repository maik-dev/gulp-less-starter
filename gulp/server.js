'use strict';

var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function(app) {

	// execute before server start
	// we need to compile all less files that could be changed
	gulp.task('before-serve', ['less']);

	gulp.task('serve', ['before-serve', 'watch'], function(){
		browserSync.init({
	        server: {
	            baseDir: app.baseDir
	        }
		});
	});

	// task for reloading browser
	gulp.task('reload', function () {
	    browserSync.reload();
	});

}