var bunyan = require('bunyan');
var logger = bunyanCreateLogger({
	name : 'myLogger',
	 streams: [{
	         path: './logfile.log',
	     }]
});

module.exports = logger;

