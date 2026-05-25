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
const bookEditChecker = require("../middleware/edit-book-body-checker");
const fileValidation = require("../middleware/file-validation");

// book list
router.get("/", bookListPage);

// add new book
router
  .route("/new-book")
  .get(addBookForm)
  .post(upload.single("file"), bookBodyChecker, fileValidation, addNewBook);

// edit book

router
  .route("/edit/:id")
  .get(editBookForm)
  .put(upload.single("file"), bookEditChecker, fileValidation, editBook);

// delete book
router.delete("/delete/:id", deleteBook);

module.exports = router;
