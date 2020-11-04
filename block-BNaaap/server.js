let http = require("http");

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.writeHead(201, {'Content-type': 'text/html'});
    res.end("Hello");
}

myServer.listen(4444, ()=> {
    console.log("My server is running");
});