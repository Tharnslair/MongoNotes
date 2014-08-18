var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.end("Hello, form the Node.js world!!!");
});

server.listen(1113);

console.log("Server is running at http://localhost:1113!!!");