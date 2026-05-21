const express = require("express");
const router = express.Router();
const bodyValidator = require("../middleware/bodyChecker");
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controller/book");

//api/books -> all books
router.get("/", getAllBooks);

// api/books/id -> single book
router.get("/:id", getBookById);

//api/books -> add book
router.post("/", bodyValidator, addBook);

//api/books/id -> update book
router.put("/:id", bodyValidator, updateBook);

//api/books/id -> delete book
router.delete("/:id", deleteBook);

module.exports = router;
