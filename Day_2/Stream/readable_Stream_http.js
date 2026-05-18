const http = require("http");

const fs = require("fs");
const { log } = require("console");

const readiableStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
// const writableStream = fs.createWriteStream(__dirname + "/write_1.txt");

const server = http.createServer((req, res) => {
  res.writeHead(200, "OK", { "content-type": "text/html" }); // changed text type
  readiableStream.pipe(res);
});

server.listen(3005, "127.0.0.1", () => {
  log("listening server 3005 ");
});
