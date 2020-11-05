let http = require('http');
let fs = require('fs');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'});

    if (req.method === 'GET' && req.url === '/file') {
        fs.readFile('./node.html', (err, content) => {
            if (err) console.log(err);
            res.end(content);
        });
    }

    if (req.method === 'GET' && req.url === '/stream') {
        fs.createReadStream('./node.html').pipe(res);
    }
}

myServer.listen(5555, () => {
    console.log("My server is running on 5555 port");
})