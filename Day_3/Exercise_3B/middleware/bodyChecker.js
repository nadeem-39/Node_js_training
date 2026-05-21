function bodyValidator(req, res, next) {
  let { BookId, BookName, Author, Price, Pages } = req.body;
  if (!BookId) return res.status(400).send({ Error: "No book Id found" });
  if (!BookName) return res.status(400).send({ Error: "No book name found" });
  if (!Author) return res.status(400).send({ Error: "No author found" });
  if (!Price) return res.status(400).send({ Error: "No price found" });
  if (!Pages) return res.status(400).send({ Error: "No pages found" });

  next();
}

module.exports = bodyValidator;
