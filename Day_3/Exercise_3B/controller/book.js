const books = require('../model/bookData');


const getAllBooks =(req, res) =>  {
  res.render('allBooks', {books});
};

const getBookById =  (req, res) => {
  let { id } = req.params;
  let book = books.find(e => e.BookId === Number(id));
  if(book)res.send({data:book});
  else res.send({Error:'No book found'});
};

const addBook = (req,res)=> {
  // console.log(req.body);
  
  let {BookId,BookName,Author,Price,Pages} = req.body;
  if(!BookId)return res.send("No book Id found");
  if(!BookName)return res.send("No book name found");
  if(!Author)return res.send("No author found");
  if(!Price)return res.send("No price found");
  if(!Pages)return res.send("No pages found");

  if(books.find(e=> e.BookId === Number(BookId)))return res.send({Error:'Already book with same Id'});

  books.push({BookId:Number(BookId),BookName,Author,Price:Number(Price),Pages:Number(Pages)});

  res.redirect('/api/books')
}

const updateBook = (req,res)=>{
  let {BookId,BookName,Author,Price,Pages} = req.body;
  if(!BookId)return res.send("No book Id found");
  if(!BookName)return res.send("No book name found");
  if(!Author)return res.send("No author found");
  if(!Price)return res.send("No price found");
  if(!Pages)return res.send("No pages found");
  let idxOfBook = books.findIndex(e => e.BookId === Number(BookId));
  if(idxOfBook===-1)return res.send({Error:'Book not found'});

  books.splice(idxOfBook,1, {BookId:Number(BookId), BookName, Author, Price:Number(Price), Pages:Number(Pages)});

  res.redirect('/api/books')
}

const deleteBook = (req,res)=>{
  let { id } = req.params; 

  let bookIdx = books.findIndex(e => e.BookId === Number(id));

  if(bookIdx===-1)return res.send({Error:'Book not found'});

  books.splice(bookIdx, 1);

  // res.send({data:books});
   res.redirect('/api/books')
}


module.exports = {getAllBooks, getBookById, addBook, updateBook, deleteBook}