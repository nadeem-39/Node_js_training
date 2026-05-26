const Users = require("../model/user");

// login page render
const loginPage = (req, res, next) => {
  try {
    console.log(
      "its login page ____________________________________________________",
    );

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
    if (!userInfo || userInfo.password !== password)
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    console.log("login route ---------------------------------");

    res.cookie("email", email);
    res.cookie("password", password);
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
    res.clearCookie("email");
    res.clearCookie("password");
    res.locals.user = null;
    res.redirect("/user/login");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { login, loginPage, logout };
