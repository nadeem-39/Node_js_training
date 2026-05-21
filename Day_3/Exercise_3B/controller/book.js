const books = require("../model/bookData");

const getAllBooks = (req, res) => {
  res.status(200).render("allBooks", { books });
};

const getBookById = (req, res) => {
  try {
    let { id } = req.params;
    let book = books.find((e) => e.BookId === Number(id));
    if (book) res.status(200).send({ data: book });
    else res.status(400).send({ Error: "No book found" });
  } catch (error) {
    next(error);
  }
};

const addBook = (req, res) => {
  try {
    let { BookId, BookName, Author, Price, Pages } = req.body;

    if (books.find((e) => e.BookId === Number(BookId)))
      return res.status(400).send({ Error: "Already book with same Id" });

    books.push({
      BookId: Number(BookId),
      BookName,
      Author,
      Price: Number(Price),
      Pages: Number(Pages),
    });

    res.redirect("/api/books");
  } catch (error) {
    next(error);
  }
};

const updateBook = (req, res) => {
  try {
    let { id } = req.params;
    let { BookName, Author, Price, Pages } = req.body;
    let idxOfBook = books.findIndex((e) => e.BookId === Number(id));
    if (idxOfBook === -1)
      return res.status(400).send({ Error: "Book not found" });

    books.splice(idxOfBook, 1, {
      BookId: Number(id),
      BookName,
      Author,
      Price: Number(Price),
      Pages: Number(Pages),
    });

    res.redirect("/api/books");
  } catch (error) {
    next(error);
  }
};

const deleteBook = (req, res) => {
  try {
    let { id } = req.params;

    let bookIdx = books.findIndex((e) => e.BookId === Number(id));

    if (bookIdx === -1)
      return res.status(400).send({ Error: "Book not found" });

    books.splice(bookIdx, 1);

    // res.send({data:books});
    res.redirect("/api/books");
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };
