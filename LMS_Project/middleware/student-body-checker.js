const studentBodyChecker = (req, res, next) => {
  let { library_id, student_name, student_age, email_id } = req?.body;
  if (!library_id) {
    return res.status(400).json({
      success: false,
      message: "Library Id not found",
    });
  }
  if (!student_name) {
    return res.status(400).json({
      success: false,
      message: "Student name not found",
    });
  }
  if (!student_age) {
    return res.status(400).json({
      success: false,
      message: "Student age not found",
    });
  }
  if (!email_id) {
    return res.status(400).json({
      success: false,
      message: "Email id not found",
    });
  }

  next();
};

module.exports = studentBodyChecker;
