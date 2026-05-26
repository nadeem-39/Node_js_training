const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");
const isAdmin = require("../middleware/authorization");

const studentBodyChecker = require("../middleware/student-body-checker");
const {
  studentListPage,
  addStudentForm,
  addNewStudent,
} = require("../controller/student");

// student list
router.get("/", auth, studentListPage);

// add new student
router
  .route("/new-student")
  .get(auth, isAdmin, addStudentForm)
  .post(auth, isAdmin, studentBodyChecker, addNewStudent);

module.exports = router;
