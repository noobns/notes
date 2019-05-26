var http = require ('http');
var url  = require ('url');
var log  = require ('./log-file');
var server = http.createServer (function(req,res){
	var page = url.parse(req.url).pathname;
	console.log(page);
	log.info('this is my log');
	if(page === '/'){
		res.write('hello welcome');
	}
	else if(page === '/first'){
		res.write('you will do great');
	}
	else if(page === '/first/second'){
		res.write('universe is listening');
	}
	res.end();
});
server.listen(8080);
