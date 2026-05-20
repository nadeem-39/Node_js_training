const books = require("../model/bookData");
const Books = require("./db_query");

console.log("HIiii controller");

const getAllBooks = async (req, res) => {
  const data = await Books.findAll();
  res.render("allBooks", { books: data });
};

const getBookById = async (req, res) => {
  let { id } = req.params;
  let book = await Books.findById(id);
  if (book) res.send({ data: book[0] });
  else res.send({ Error: "No book found" });
};

const addBook = async (req, res) => {
  // console.log(req.body);

  let { id, name, author, price, pages } = req.body;
  if (!id) return res.send("No book Id found");
  if (!name) return res.send("No book name found");
  if (!author) return res.send("No author found");
  if (!price) return res.send("No price found");
  if (!pages) return res.send("No pages found");

  let preBookInfo = await Books.findById(id);
  if (preBookInfo[0]) return res.send({ Error: "Already book with same Id" });

  let data = Books.createBook(id, name, author, price, pages);

  res.redirect("/api/books");
};

const updateBook = async (req, res) => {
  let { id, name, author, price, pages } = req.body;
  if (!id) return res.send("No book Id found");
  if (!name) return res.send("No book name found");
  if (!author) return res.send("No author found");
  if (!price) return res.send("No price found");
  if (!pages) return res.send("No pages found");

  let BookInfo = await Books.findById(id);
  if (!BookInfo[0]) return res.send({ Error: "No book found with this id" });

  await Books.findAndUpdate(id, name, author, price, pages);

  res.redirect("/api/books");
};

const deleteBook = async (req, res) => {
  let { id } = req.params;

  let BookInfo = await Books.findById(id);
  if (!BookInfo[0]) return res.send({ Error: "No book found with this id" });

  await Books.findAndDelete(id);

  res.redirect("/api/books");
};

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };
