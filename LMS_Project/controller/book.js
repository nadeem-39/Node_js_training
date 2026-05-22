// book list render
const bookListPage = (req, res, next) => {
  try {
    res.status(200).render("book-list");
  } catch (error) {
    next(error);
  }
};

module.exports = { bookListPage };
