const fs = require("fs");

fs.readFile("read_1.txt", "utf-8", function (error, data) {
  console.log("Reading from read_1.txt\n" + data);
});

fs.writeFile("write_1.txt", "Hii there How are you?", "utf-8", (error) => {
  if (error) console.log(error);
});

const data2 = fs.readFileSync("write_1.txt", "utf-8");

console.log("Reading from write_1.txt \n" + data2);
