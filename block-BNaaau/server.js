let http = require('http');
let url = require('url');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url, true);
  console.log(req.url);
  console.log(parsedUrl.pathname);
  let email = parsedUrl.query.email;
  
  if (req.method === 'GET' && req.url === '/users?email=nodeserver@gmail.com') {
    res.end(email);
  }
}

myServer.listen(2345);