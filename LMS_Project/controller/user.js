const homePage = (req, res, next) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    next(error);
  }
};

const login = (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

module.exports = login;
