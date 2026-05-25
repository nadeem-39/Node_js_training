const Students = require("../model/Student");

// Student list render

const studentListPage = async (req, res, next) => {
  try {
    const data = await Students.findAll();
    res.render("student-list", { students: data });
  } catch (error) {
    next(error);
  }
};

const addStudentForm = (req, res, next) => {
  try {
    res.render("add-student");
  } catch (error) {
    next(error);
  }
};

const addNewStudent = async (req, res, next) => {
  try {
    let { library_id, student_name, student_age, email_id } = req?.body;

    // console.log(req.body);
    await Students.AddOne(library_id, student_name, student_age, email_id);
    res.status(201).json({
      success: true,
      message: "Student Added Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed To Add Student",
    });
  }
};

module.exports = {
  studentListPage,
  addStudentForm,
  addNewStudent,
};
