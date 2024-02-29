var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const num = 1;

    const calculation = (num * 5) / 2;
    const array = ["john","paul"]
    res.end(array);
    JSON.stringify(1);
  })
  .listen(8080, console.log("listening 8080"));
