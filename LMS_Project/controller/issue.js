const Issue = require("../model/issue");

// Student list render

const issueListPage = async (req, res, next) => {
  try {
    const data = await Issue.findAll();
    res.render("issue-list", { issue_list: data });
    console.log(data);
  } catch (error) {
    next(error);
  }
};

const issueBookForm = (req, res, next) => {
  try {
    res.render("issue-book-form");
  } catch (error) {
    next(error);
  }
};

const addNewIssueBook = async (req, res, next) => {
  try {
    let { book_id, student_library_id } = req?.body;
    console.log(book_id, student_library_id);
    await Issue.AddOne(book_id, student_library_id);

    res.status(201).json({
      success: true,
      message: "Issued Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed To Issued",
    });
  }
};

module.exports = {
  issueListPage,
  issueBookForm,
  addNewIssueBook,
};
