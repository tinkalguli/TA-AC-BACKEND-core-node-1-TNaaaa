let http = require("http");
let url = require("url");

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    let pathname = url.parse(req.url).pathname;

    if (req.method === 'GET' && pathname === '/') {
        res.write('Welcome to homepage');
        res.end();
    }

    if (req.method === 'GET' && pathname === '/about') {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write('<h2>this is all about NodeJS</h2>');
        res.end();
    }

    if (req.method === 'POST' && pathname === '/about') {
        res.writeHead(200, {'Content-type' : 'application/json'});
        res.write(JSON.stringify('{message: this is a post request}'));
        res.end();
    }
}

myServer.listen(5000, () => {
    console.log("MY server is running on 5000 port");
})