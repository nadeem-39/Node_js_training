const express = require("express");
const router = express.Router();
const { bookListPage } = require("../controller/book");

// book list
router.get("/", bookListPage);

// add new book
router.post("/");

module.exports = router;
