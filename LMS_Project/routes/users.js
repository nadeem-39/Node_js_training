const express = require("express");
const router = express.Router();
const { login, loginPage } = require("../controller/user");

// login form
router.get("/", loginPage);

// login logic
router.post("/", login);

module.exports = router;
