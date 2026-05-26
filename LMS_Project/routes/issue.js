const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");
const isAdmin = require("../middleware/authorization");
const {
  issueListPage,
  issueBookForm,
  addNewIssueBook,
} = require("../controller/issue");
const issueBookBodyChecker = require("../middleware/issue-book-body-checker");

// issue list
router.get("/", auth, issueListPage);

// add new issue book
router
  .route("/new-book-issue")
  .get(auth, isAdmin, issueBookForm)
  .post(auth, isAdmin, issueBookBodyChecker, addNewIssueBook);

module.exports = router;
