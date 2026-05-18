const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello World");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("listing port 3000");
});
