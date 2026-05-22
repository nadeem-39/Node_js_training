const Users = require("../model/user");

// login page render
const loginPage = (req, res, next) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    next(error);
  }
};

// user credentials checker
const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const [userInfo] = await Users.findByEmail(email);
    if (!userInfo) return res.status(400).send({ error: "No user found" });

    if (userInfo.password === password) {
      res.status(200).send({ success: "user login successfully" });
    } else res.status(400).send({ error: "Invalid Credentials" });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, loginPage };
