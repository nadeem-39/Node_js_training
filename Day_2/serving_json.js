const http = require("http");

const { log } = require("console");

const nadeem = {
  name: "Nadeem",
  age: 23,
  role: "Developer",
};

const server = http.createServer((req, res) => {
  log(req.url);
  res.writeHead(200, "OK", { "content-type": "text/JSON" }); // changed text type
  res.end(JSON.stringify(nadeem));
});

server.listen(3005, "127.0.0.1", () => {
  log("listening server 3005 ");
});
