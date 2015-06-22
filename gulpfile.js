/*
* Root configuration file for gulp.
* Rest of configuration files are in ./gulp directory
*/

'use strict';

var gulp        = require('gulp');
var wrench 		= require('wrench');

var appRoot = 'app';

var app = {

	// root of application which will be serve 
	baseDir: appRoot,

	// paths for all types of files
	paths: {
		
		// files used in watch task
		watch: {
			less: appRoot + '/**/*.less',
			html: appRoot +'/**/*.html',
			js: appRoot + '/**/*.js'
		},

		// less files used in less task. 
		less: {
			// We use only one file which contains all imports
			src: appRoot + '/styles/less/main.less',
			// directory for main.css file
			dest: appRoot + '/styles'
		},
		
	},

}

// load all gulp tasks from ./gulp directory
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js)$/i).test(file);
}).map(function(file) {
    require('./gulp/' + file)(app);
});

gulp.task('default', ['serve']);
