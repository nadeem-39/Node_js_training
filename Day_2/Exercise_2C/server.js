const http = require("http");

const books = [
  {
    BookId: 101,
    BookName: "The Alchemist",
    Author: "Paulo Coelho",
    Price: 399,
    Pages: 208,
  },
  {
    BookId: 102,
    BookName: "Atomic Habits",
    Author: "James Clear",
    Price: 550,
    Pages: 320,
  },
  {
    BookId: 103,
    BookName: "Rich Dad Poor Dad",
    Author: "Robert Kiyosaki",
    Price: 450,
    Pages: 336,
  },
  {
    BookId: 104,
    BookName: "Think and Grow Rich",
    Author: "Napoleon Hill",
    Price: 499,
    Pages: 238,
  },
  {
    BookId: 105,
    BookName: "The Psychology of Money",
    Author: "Morgan Housel",
    Price: 520,
    Pages: 256,
  },
  {
    BookId: 106,
    BookName: "Ikigai",
    Author: "Hector Garcia",
    Price: 430,
    Pages: 208,
  },
  {
    BookId: 107,
    BookName: "Deep Work",
    Author: "Cal Newport",
    Price: 600,
    Pages: 304,
  },
  {
    BookId: 108,
    BookName: "The Hobbit",
    Author: "J.R.R. Tolkien",
    Price: 699,
    Pages: 310,
  },
  {
    BookId: 109,
    BookName: "1984",
    Author: "George Orwell",
    Price: 350,
    Pages: 328,
  },
  {
    BookId: 110,
    BookName: "Clean Code",
    Author: "Robert C. Martin",
    Price: 799,
    Pages: 464,
  },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(books));
});

server.listen(3000, "127.0.0.1", () => {
  console.log("listing port 3000");
});
