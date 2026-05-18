const fs = require("fs");

// sync

// fs.mkdirSync("my_dir");

// fs.rmdirSync("./my_dir");

// async

fs.mkdir("my_dir", (e) => console.log(e));

fs.rmdir("my_dir", (e) => console.log(e));
