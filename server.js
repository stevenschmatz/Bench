/**
 * Created by stevenschmatz on 2/4/14.
 */
var http = require('http');

function start() {
    function onRequest(request, response) {
        console.log('request received');
        response.writeHead(200, {'Content-type':'text/plain'});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started');

}

exports.start = start;