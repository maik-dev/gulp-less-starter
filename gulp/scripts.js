'use strict';

var gulp 		= require('gulp');
var logger 		= require('./logger')();

module.exports = function(app) {

	gulp.task('js', function(){
		logger.info('js task');
	});

}