require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const BookRoutes = require("./routes/book");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/api/books", BookRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ Error: "Server error" });
});

app.listen(3006, () => {
  console.log("listing at 3006");
});
