const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/home" || req.url === "/") {
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
    res.writeHead(200, "OK", { "content-type": "text/html" });
    readStream.pipe(res);
  } else if (req.url === "/about") {
    const readStream = fs.createReadStream(__dirname + "/about.html", "utf-8");
    res.writeHead(200, "OK", { "content-type": "text/html" });
    readStream.pipe(res);
  } else {
    const readStream = fs.createReadStream(
      __dirname + "/error_404.html",
      "utf-8",
    );
    res.writeHead(200, "OK", { "content-type": "text/html" });
    readStream.pipe(res);
  }
});

server.listen(3005, "127.0.0.1", () => {
  console.log("listing on 3005");
});
