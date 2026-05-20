const fs = require("fs");
console.log("a----------");

fs.readFile("employees.csv", "utf-8", (err, data) => {
  //   console.log(data);
  let [Header, ...arr] = data.split("\n");

  let filteredData = arr.filter((e) => {
    let employee = e.split(",");
    return employee[5] === "IT_PROG" ? true : false;
  });
  console.log("c----------");

  let finalData = Header + "\n" + filteredData.join("\n");

  fs.writeFile("output.txt", finalData, (error) => console.log(error));
  // console.log(finalData);
  //   console.log(Header);
});

console.log("b----------");
