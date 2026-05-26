const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");

const studentBodyChecker = require("../middleware/student-body-checker");
const {
  studentListPage,
  addStudentForm,
  addNewStudent,
} = require("../controller/student");

// book list
router.get("/", auth, studentListPage);

// add new book
router
  .route("/new-student")
  .get(auth, addStudentForm)
  .post(auth, studentBodyChecker, addNewStudent);

module.exports = router;
