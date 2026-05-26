const Users = require("../model/user");
var jwt = require("jsonwebtoken");

// login page render
const loginPage = (req, res, next) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// user credentials checker
const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const [userInfo] = await Users.findByEmail(email);
    if (!userInfo || userInfo.password !== password) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      {
        data: { email, password },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.cookie("token", token);
    res.locals.user = userInfo;
    res.status(200).json({ success: true, message: "User Login successfully" });
  } catch (error) {
    console.log();
    next(error);
  }
};

// logout

const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.locals.user = null;
    res.redirect("/user/login");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { login, loginPage, logout };
