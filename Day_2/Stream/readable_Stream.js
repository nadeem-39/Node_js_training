const http = require("http");

const fs = require("fs");
const { log } = require("console");

const readiableStream = fs.createReadStream(__dirname + "/read_1.txt", "utf-8");

readiableStream.on("data", (chunk) => {
  log(
    "new Data Recieved ***************************************************************************************",
  );
  console.log(chunk);
});
