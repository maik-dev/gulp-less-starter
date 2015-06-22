'use strict';

var gulp 		= require('gulp');
var logger 		= require('./logger')();

module.exports = function(app) {

	gulp.task('html', function(){
		logger.info('html task');
	});

}