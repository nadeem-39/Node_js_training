const issueBookBodyChecker = (req, res, next) => {
  console.log(req.body);

  let { student_library_id, book_id } = req?.body;
  if (!student_library_id) {
    return res.status(400).json({
      success: false,
      message: "Library Id not found",
    });
  } else if (!book_id) {
    return res.status(400).json({
      success: false,
      message: "Book Id not found",
    });
  }
  next();
};

module.exports = issueBookBodyChecker;
