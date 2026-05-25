const express = require("express");
const router = express.Router();
const { upload } = require("../config/multer");
const {
  bookListPage,
  addBookForm,
  addNewBook,
  deleteBook,
  editBook,
  editBookForm,
} = require("../controller/book");
const bookBodyChecker = require("../middleware/book-body-checker");

// book list
router.get("/", bookListPage);

// add new book
router
  .route("/new-book")
  .get(addBookForm)
  .post(upload.single("file"), bookBodyChecker, addNewBook);

// edit book

router.route("/edit/:id").get(editBookForm).put(editBook);

// delete book
router.delete("/delete/:id", deleteBook);

module.exports = router;
