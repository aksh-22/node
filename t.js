const http = require("node:http");

http
  .createServer((req, res) => {
    res.end("Hello world");
  })
  .listen(1234);
