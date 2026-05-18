const http = require("http");

const fs = require("fs");
const { log } = require("console");

const readiableStream = fs.createReadStream(__dirname + "/read_1.txt", "utf-8");
const writableStream = fs.createWriteStream(__dirname + "/write_1.txt");

// readiableStream.on("data", (chunk) => {
//   log(
//     "new Data Recieved ***************************************************************************************",
//   );
//   //   log(chunk);
//   writableStream.write(chunk);
// });

// The upper code from 9 to 15 can be changed by below line.

readiableStream.pipe(writableStream);
