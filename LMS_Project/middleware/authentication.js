const User = require("../model/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    let { token } = req.cookies;
    if (!token) {
      res.clearCookie(token);
      res.locals.user = null;
      return res.status(401).redirect("/user/login");
    }
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let { email } = decoded?.data;
    let [userInfo] = await User.findByEmail(email);
    if (!userInfo) {
      res.clearCookie(token);
      res.locals.user = null;
      return res.status(401).redirect("/user/login");
    }

    res.locals.user = {
      first_name: userInfo.first_name,
      email: userInfo.email,
      role: userInfo.role,
    };
    req.user = {
      first_name: userInfo.first_name,
      email: userInfo.email,
      role: userInfo.role,
    };
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = auth;
