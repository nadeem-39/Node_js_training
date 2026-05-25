const express = require("express");
const router = express.Router();
const {
  issueListPage,
  issueBookForm,
  addNewIssueBook,
} = require("../controller/issue");
const issueBookBodyChecker = require("../middleware/issue-book-body-checker");

// issue list
router.get("/", issueListPage);

// add new issue book
router
  .route("/new-book-issue")
  .get(issueBookForm)
  .post(issueBookBodyChecker, addNewIssueBook);

module.exports = router;
