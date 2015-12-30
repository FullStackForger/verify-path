'use strict';
var
	fs = require('fs'),
	path = require('path');

/**
 * Verifies the path to directory storing repositories.
 * If directory doesn't exist it will create one.
 * Returns ES6 promise.
 * @param {object} settings
 * @param {object.path} path
 * @param {object.mode} mode
 * @returns {Promise}
 */
module.exports = function verifyPath (settings) {	
	return new Promise((resolve, reject) => {		
		
		if (settings == null) settings = {}

		let dirPath = path.resolve(__dirname, settings.path || '.')
		let mode = settings.mode || parseInt('0755', 8) 
		
		settings.fullPath = dirPath
		
		// check if file exist
		fs.stat(dirPath, (error, stats) => {

			// create directory if doesn't
			if (error) {
				return fs.mkdir(dirPath, mode, (error) => {
					if (error) return reject (error)
					resolve(settings)
				})
			}

			// check if is a directory
			if (!stats.isDirectory()) {
				return reject(new Error('File: ' + dirPath + ' is not a directory'))
			}

			// check if is writable
			return fs.access(dirPath, fs.F_OK | fs.R_OK | fs.W_OK, (error) => {
				if (error) return reject(error)
				resolve(settings)
			})
		});
	})
}
