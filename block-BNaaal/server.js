let http = require("http");

http.createServer((req, res) => {
    console.log(req, res);
    res.end("This text is going to the client"); // Output in browser
}).listen(4000, () => {
    console.log("Server is running in the port 4000"); // Output in terminal
});

