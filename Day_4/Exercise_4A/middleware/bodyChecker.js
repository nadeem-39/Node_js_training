function bodyValidator(req, res, next) {
  let { id, name, author, price, pages } = req.body;
  if (!id) return res.status(400).send({ Error: "No book Id found" });
  if (!name) return res.status(400).send({ Error: "No book name found" });
  if (!author) return res.status(400).send({ Error: "No author found" });
  if (!price) return res.status(400).send({ Error: "No price found" });
  if (!pages) return res.status(400).send({ Error: "No pages found" });

  next();
}

module.exports = bodyValidator;
