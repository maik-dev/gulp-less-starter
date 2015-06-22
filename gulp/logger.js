'use strict';

var gutil = require('gulp-util');

module.exports = function() {

	return {
		info: function(message) {
		    gutil.log(gutil.colors.yellow('[Info] ' + message));
		},
		error: function(title) {
			return function(err) {
		        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
		        gutil.beep()
		        this.emit('end');
	    	};
		}
	}

}