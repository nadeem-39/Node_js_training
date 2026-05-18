const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.send("Hii I am home page");
});

app.get("/profile/:username", (req, res) => {
  let { username } = req.params;
  let { lastname } = req.query;
  res.render("profile", { user: username, lastname: lastname });
});

app.listen(3006, () => {
  console.log("listing at 3006");
});
