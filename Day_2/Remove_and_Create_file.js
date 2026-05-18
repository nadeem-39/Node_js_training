// sync

const fs = require("fs");

// fs.unlinkSync("write_1.txt");

// async

fs.unlink("write_1.txt", (err) => {
  console.log(err);
});
