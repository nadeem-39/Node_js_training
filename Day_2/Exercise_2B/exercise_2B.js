const fs = require("fs");
fs.readFile("employees.csv", "utf-8", (err, data) => {
  //   console.log(data);
  let [Header, ...arr] = data.split("\n");

  let filteredData = arr.filter((e) => {
    let employee = e.split(",");
    return employee[5] === "IT_PROG" ? true : false;
  });

  let finalData = Header + "\n" + filteredData.join("\n");

  fs.writeFile("output.txt", finalData, (error) => console.log(error));
});
