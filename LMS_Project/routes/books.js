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
const auth = require("../middleware/authentication");

// book list

router.get("/", auth, bookListPage);

// add new book
router
  .route("/new-book")
  .get(addBookForm)
  .post(
    auth,
    upload.single("file"),
    bookBodyChecker,
    fileValidation,
    addNewBook,
  );

// edit book

router
  .route("/edit/:id")
  .get(auth, editBookForm)
  .put(auth, upload.single("file"), bookEditChecker, fileValidation, editBook);

// delete book
router.delete("/delete/:id", auth, deleteBook);

module.exports = router;
