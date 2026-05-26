const User = require("../model/user");

const isAdmin = async (req, res, next) => {
  try {
    let userInfo = req?.user;
    res.locals.user = userInfo;
    if (userInfo?.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Sorry You are not Admin.",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = isAdmin;
