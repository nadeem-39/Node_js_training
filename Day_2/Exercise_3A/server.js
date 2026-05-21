const http = require("http");
const fs = require("fs");
const readline = require("readline");
const { Transform } = require("stream");

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(__dirname + "/employees.csv", "utf-8");

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  let isHeader = true;

  const filteredStream = new Transform({
    transform(line, encoding, callback) {
      line = line.toString();

      // keep header
      if (isHeader) {
        isHeader = false;

        callback(null, line + "\n");
        return;
      }

      let employee = line.split(",");

      let salary = Number(employee[employee.length - 1]);

      if (salary > 10000) {
        callback(null, line + "\n");
      } else {
        callback(null, "");
      }
    },
  });

  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  // send each line into transform stream
  rl.on("line", (line) => {
    filteredStream.write(line);
  });

  // end transform stream
  rl.on("close", () => {
    filteredStream.end();
  });

  // final output to browser
  filteredStream.pipe(res);
});

server.listen(3005, "127.0.0.1", () => {
  console.log("Listening on 3005");
});
