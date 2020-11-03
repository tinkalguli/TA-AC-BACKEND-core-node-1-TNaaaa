var fs = require("fs");

var content = fs.readFileSync('./content.md', "utf8");
console.log(content);

fs.readFile('./content.md', "utf8", (err, file) => {
  console.log(err, file);
});

var buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write("Welcome to Buffer");
console.log(buff1);