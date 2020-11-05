writeCode

Q. Create a basic server using http's createServer
  - listen for request on port 5000
  - console request and response object
  - do a request using browser on `localhost:5000`
  - check out console for request and response object

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req, res);
}

myServer.listen(5000);
```

Q. create a node server 
  - add listener on port 5100
  - respond with 'My first server in NodeJS' using response object

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.write('My first server in NodeJS');
    res.end();
}

myServer.listen(5100);
```

Q. write code to create a node server 
  - add listener on port 5555
  - console request headers
  - respond with content of user-agent from request headers.

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    let headers = req.headers;
    console.log(headers);
    res.end(headers["user-agent"]);
}

myServer.listen(5555);
```

Q. write code to create a node server 
  - add listener on port 5566
  - console request url and request method
  - return a text response with requested url and method

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.url, req.method);
    res.end("Request url : " + req.url + "Request mathod : " + req.method);
}

myServer.listen(5566);
```

Q. write code to create a node server 
  - add listener on port 7000
  - also add a callback function to listener with a console `server listening on port 7000`
  - return entire request headers in response.

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.end(req.headers);
}

myServer.listen(7000, () => {
  console.log(`server listening on port 7000`);
});
```

Q. create a server
  - add a listener on port 3333
  - set status code 202 in response using `res.statusCode`.

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.statusCode = '200';
    res.end(res.statusCode);
}

myServer.listen(3333);
```

Q. create a server 
  - add a listener on port 8000
  - set appropriate header for html response using `res.setHeader`
  - return an HTML response(`<h3>Welcome to altcampus</h3>`) 

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.setHeader('Content-type', 'text/html');
    res.end(`<h3>Welcome to altcampus</h3>`);
}

myServer.listen(8000);
```

Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`<h3>Welcome to altcampus</h3>`);
}

myServer.listen(8000);
```

Q. create a basic node server
  - add a listener at port 8888
  - add appropriate header for json response
  - send json response({success: true, message: 'Welcome to Nodejs'})

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.writeHead(200, {'Content-type' : 'application/json'});
    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
}

myServer.listen(8888);
```

Q. create a server
  - add listener on port 5050
  - use postman to do a POST request on index route
  - console to check request method
  - send HTML response i.e. `<h2>posted for first time</h2>`

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method);
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`<h2>posted for first time</h2>`);
}

myServer.listen(5050);
```

Q. create a server and handle 2 different requests
  - add a listener on port 2345
  - handle GET request on '/' route where return your name in plain text in response
  - handle GET request on '/about' route and return your name in h2 as HTML page.
  - add a error handler at last to handle request made on other than above routes with a status code of 404.

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.end("TINKAL DEKA");
  }
  
  if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`<h2>TINKAL DEKA</h2>`);
  }

  res.writeHead(404, {'Content-type' : 'text/html'});
  res.end(`<h2>Page not found (404)</h2>`);
}

myServer.listen(2345);
```

Q. Handle 2 requests on same route with different method
    1. GET on '/users' route where return a simple HTML form with name and email field
    2. POST on '/users' route with a message 'Posted for the second time'.

```js
let http = require('http');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/users') {
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`
    <label>Name <input type="text" style="margin-left:0.7rem"></label><br>
    <label>Email <input type="email" style="margin-left:0.7rem"></label>
    `);
  }
  
  if (req.method === 'POST' && req.url === '/users') {
    res.end('Posted for the second time');
  }
}

myServer.listen(2345);
```

Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

  - parse the  request url using parse method from url module
  - console pathname from parsed url in above step
  - grab url using `req.url`
  - differentiate between `req.url` and `parsedUrl.pathname`
  - grab the email from query params
  - return json response with email from query params

```js
let http = require('http');
let url = require('url');

let myServer = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url, true);
  console.log(req.url); // /users?email=nodeserver@gmail.com (includes query string)
  console.log(parsedUrl.pathname); // /users (does not includes query string)
  let email = parsedUrl.query.email;
  
  if (req.method === 'GET' && req.url === '/users?email=nodeserver@gmail.com') {
    res.end(email);
  }
}

myServer.listen(2345);
```