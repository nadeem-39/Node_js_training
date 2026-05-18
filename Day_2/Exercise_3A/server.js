const http = require("http");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(__dirname + "/employees.csv", "utf-8");
  let data = "";
  readStream.on("data", (chunk) => (data += chunk));
  readStream.on("end", () => {
    let [head, ...employees] = data.split("\n");
    let filteredData = employees.filter((e) => {
      let employee = e.split(",");
      return employee[employee.length - 1] > 10000;
    });

    data = head + "\n" + filteredData.join("\n");
    const writeStream = fs.createWriteStream(__dirname + "/output.txt");
    writeStream.write(data);
    writeStream.end();
    writeStream.on("finish", () => {
      const responseReadStream = fs.createReadStream(
        __dirname + "/output.txt",
        "utf-8",
      );
      res.writeHead(200, { "Content-Type": "text/plain" });
      responseReadStream.pipe(res);
    });
  });
});

server.listen(3005, "127.0.0.1", () => {
  console.log("listing on 3005");
});
