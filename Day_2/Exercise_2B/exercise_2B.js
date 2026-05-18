const fs = require("fs");

fs.readFile("employees.csv", "utf-8", (err, data) => {
  //   console.log(data);
  let [Header, ...arr] = data.split("\n");

  let filtererData = arr.filter((e) => {
    let employee = e.split(",");
    return employee[5] === "IT_PROG" ? true : false;
  });

  let finalData = Header + filtererData.join("\n");

  fs.writeFile("output.txt", finalData, "utf-8", (error) => console.log(error));
  console.log(finalData);
  //   console.log(Header);
});
