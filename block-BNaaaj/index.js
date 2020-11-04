let os = require("os");
let {readFile, unlink, readFileSync} = require("fs");

console.log('Welcome to Nodejs');
console.log(os.cpus, os.freemem, os.uptime, os.version);

let firstBuff = Buffer.alloc(12);
let secondBuff = Buffer.allocUnsafe(12);

let firstBuffString = firstBuff.toString();
let secondBuffString = secondBuff.toString();

console.log(firstBuff, firstBuffString);
console.log(secondBuff, secondBuffString);


// non-blocking code
readFile("./content.md", "utf8", (err, content) => {
    console.log(content, "----non-blocking code");
});

// blocking code
let readContent = readFileSync("./content.md", "utf8");
console.log(readContent, "----blocking code");