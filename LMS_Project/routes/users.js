const express = require("express");
const router = express.Router();
const { login, loginPage, logout } = require("../controller/user");

// login form and login routes
router.route("/login").get(loginPage).post(login);

// logout logic
router.get("/logout", logout);

module.exports = router;
