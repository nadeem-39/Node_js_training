const express = require("express");
const router = express.Router();

const studentBodyChecker = require("../middleware/student-body-checker");
const {
  studentListPage,
  addStudentForm,
  addNewStudent,
} = require("../controller/student");

// book list
router.get("/", studentListPage);

// add new book
router
  .route("/new-student")
  .get(addStudentForm)
  .post(studentBodyChecker, addNewStudent);

module.exports = router;
