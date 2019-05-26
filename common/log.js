var bunyan = require ('bunyan');

var log    = bunyan.createLogger ({name : 'notes'});

module.exports = log;
