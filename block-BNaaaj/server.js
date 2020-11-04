let {parse} = require("url");

let parsedUrl = parse("https://airindia.com/fares/calculate?from=delhi&to=detroit");

console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);

console.log(parse(parsedUrl.query));