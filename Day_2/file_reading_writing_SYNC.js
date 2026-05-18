const fs = require("fs");

const data1 = fs.readFileSync("read_1.txt", "utf-8");

console.log("Reading from read_1.txt\n" + data1);

fs.writeFileSync("write_1.txt", "utf-8", data1);

const data2 = fs.readFileSync("write_1.txt", "utf-8");

console.log("Reading from write_1.txt \n" + data2);
