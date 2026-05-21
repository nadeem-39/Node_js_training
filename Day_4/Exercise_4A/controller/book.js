const books = require("../model/bookData");
const Books = require("./db_query");

const getAllBooks = async (req, res) => {
  try {
    const data = await Books.findAll();
    res.status(200).render("allBooks", { books: data });
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res) => {
  try {
    let { id } = req.params;
    let book = await Books.findById(id);
    if (book) res.status(200).send({ data: book[0] });
    else res.status(400).send({ Error: "No book found" });
  } catch (error) {
    next(error);
  }
};

const addBook = async (req, res) => {
  try {
    let { id, name, author, price, pages } = req.body;

    let preBookInfo = await Books.findById(id);
    if (preBookInfo[0])
      return res.status(400).send({ Error: "Already book with same Id" });

    let data = Books.createBook(id, name, author, price, pages);

    res.status(200).send({ Success: "Book added successfully" });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, author, price, pages } = req.body;
    let BookInfo = await Books.findById(id);
    if (!BookInfo[0])
      return res.status(400).send({ Error: "No book found with this id" });

    await Books.findAndUpdate(id, name, author, price, pages);

    res.status(200).send({ Success: "Book Edited successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    let { id } = req.params;

    let BookInfo = await Books.findById(id);
    if (!BookInfo[0])
      return res.status(400).send({ Error: "No book found with this id" });

    await Books.findAndDelete(id);

    res.status(200).send({ Success: "Book deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };
