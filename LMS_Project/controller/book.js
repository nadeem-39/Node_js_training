const transporter = require("../config/node-mailer");
const Books = require("../model/book");

// book list render

const bookListPage = async (req, res, next) => {
  try {
    const data = await Books.findAll();
    res.render("book-list", { books: data });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// add new book form get req
const addBookForm = (req, res, next) => {
  try {
    res.render("add-book");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// add new book in db post req
const addNewBook = async (req, res, next) => {
  try {
    let { bookName, authorName, isbn } = req?.body;
    let file = req?.file?.filename;
    await Books.AddOne(bookName, authorName, isbn, file);

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: req?.user?.email,
      subject: "no-reply \nNew Book Added",
      html: `
                <h2>Book Details</h2>
                <p>
                    <strong>Book Name:</strong>
                    ${bookName}
                </p>
                <p>
                    <strong>Author Name:</strong>
                    ${authorName}
                </p>
                <p>
                    <strong>ISBN:</strong>
                    ${isbn}
                </p>
            `,
      attachments: [
        {
          filename: "Book Image",
          path: `assets/uploads/${file}`,
          contentType: req.file.mimetype,
        },
      ],
    });

    res.status(201).json({
      success: true,
      message: "Book Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed To Add Book",
    });
  }
};

const editBookForm = async (req, res, next) => {
  try {
    let { id } = req?.params;
    let [book] = await Books.findOne(id);
    res.render("edit-book", { book });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const editBook = async (req, res, next) => {
  try {
    let { id } = req?.params;
    let { bookName, authorName, isbn } = req?.body;
    let file = req?.file?.filename;
    await Books.findAndUpdateOne(id, bookName, authorName, isbn, file);
    res.status(200).json({
      success: true,
      message: "Book Updated successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed To Update Book",
    });
  }
};

const deleteBook = async (req, res, next) => {
  try {
    let { id } = req?.params;
    console.log(id);

    await Books.findAndDeleteOne(id);
    res.status(200).json({
      success: true,
      message: "Book Deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed To Delete Book",
    });
  }
};

module.exports = {
  bookListPage,
  addBookForm,
  addNewBook,
  deleteBook,
  editBookForm,
  editBook,
};
