let http = require("http");

http.createServer((req, res) => {
    console.log(req.headers);
    console.log(req.method, req.url);
    res.end("Welcome bro");
}).listen(3000, () => {
    console.log("Server is running")
});


// {
//   host: 'localhost:3000',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4302.0 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'sec-fetch-dest': 'document',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-US,en;q=0.9'
// }
// GET /about
// {
//   host: 'localhost:3000',
//   connection: 'keep-alive',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4302.0 Safari/537.36',
//   accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//   'sec-fetch-site': 'same-origin',
//   'sec-fetch-mode': 'no-cors',
//   'sec-fetch-dest': 'image',
//   referer: 'http://localhost:3000/about',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-US,en;q=0.9'
// }
// GET /favicon.ico
