'use strict';

var gutil = require('gulp-util');

module.exports = function() {

	return {
		error: function(title) {
			return function(err) {
		        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
		        gutil.beep()
		        this.emit('end');
	    	};
		}
	}

}