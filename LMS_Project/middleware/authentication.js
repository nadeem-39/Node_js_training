const User = require("../model/user");

const auth = async (req, res, next) => {
  try {
    console.log(req.cookies);
    let { email, password } = req.cookies;
    let [userInfo] = await User.findByEmail(email);
    if (!userInfo || userInfo.password !== password) {
      res.clearCookie("email");
      res.clearCookie("password");
      res.locals.user = null;
      return res.status(401).redirect("/user/login");
    }

    res.locals.user = userInfo;

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = auth;
