let http = require("http");
let fs = require("fs");

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    if (req.method == "GET" && req.url == "/") {
        console.log("index")
        res.writeHead(200, {"Content-type" : "text/html"});
        fs.createReadStream("./Application/index.html").pipe(res);
    }

    if (req.method == "GET" && (req.url == "/about" || req.url == "/about.html")) {
        res.writeHead(200, {"Content-type" : "text/html"});
        fs.createReadStream("./Application/about.html").pipe(res);
    }

    if(req.url.split('.').pop() === 'css') {
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('./Application' + req.url, (err, content) => {
        if(err) return console.log(err);
        res.end(content)
        })
    }

    if(req.url.split('.').pop() === 'js') {
        res.setHeader('Content-Type', 'text/js');
        fs.readFile('./Application' + req.url, (err, content) => {
        if(err) return console.log(err);
        res.end(content)
        })
    }

    if(["jpeg", "jpg", "svg", "png"].includes(req.url.split('.').pop())) {
        if (req.url.split('.').pop() == "svg") {
            res.setHeader('Content-Type', 'image/' + req.url.split('.').pop() + "+xml");
        }  else res.setHeader('Content-Type', 'image/' + req.url.split('.').pop());
        fs.readFile('./Application' + req.url, (err, content) => {
        if(err) return console.log(err);
        res.end(content)
        })
    }

}

myServer.listen(3000);