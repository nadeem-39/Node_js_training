const bookBodyChecker = (req, res, next) => {
  let { bookName, authorName, isbn } = req?.body;
  let file = req.file.filname;
  console.log(req.body);

  if (!bookName) {
    return res.status(400).json({
      success: false,
      message: "Book Name not found",
    });
  } else if (!authorName) {
    return res.status(400).json({
      success: false,
      message: "Author name not found",
    });
  } else if (!isbn) {
    return res.status(400).json({
      success: false,
      message: "ISBN number not found",
    });
  } else if (!file) {
    return res.status(400).json({
      success: false,
      message: "Image not found",
    });
  }

  next();
};

module.exports = bookBodyChecker;
