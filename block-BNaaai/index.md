writeCode

1. Use **URL** module to parse url informaton.

```js
// create file index.js
var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);
```
- console parsedUrl.pathname
- console parsedUrl.query
- console.log parsed Url host and protocol

2. Do a request on google.com and view headers inside developer's network tab by clicking on a specific request.

