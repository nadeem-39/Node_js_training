require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const logger = require("morgan");
const getRawBody = require("raw-body");
const contentType = require("content-type");
const toobusy = require("toobusy-js");
const bouncer = require("express-bouncer");
const rateLimit = require("express-rate-limit");

// routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const studentRoutes = require("./routes/student");
const issueRoutes = require("./routes/issue");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => done(null, profile),
  ),
);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
app.use(logger("dev"));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "assets")));

// Handle DoS and DDoS.

const limiter = rateLimit({
  windowMs: 60 * 1000,

  max: 5,

  message: "Too many login attempts",
});

// handle when server is too busy

app.use(function (req, res, next) {
  if (toobusy()) {
    // log if you see necessary
    res.status(503).json({ success: false, message: "Server Too Busy" });
  } else {
    next();
  }
});

// login routes
app.use("/user", limiter, usersRouter);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res, next) => {
    console.log(req.user);
    res.redirect("/book");
  },
);

app.get("/logout", (req, res, next) => {
  try {
    req.logout((err) => {
      if (err) {
        return next(err);
      }

      res.redirect("/login");
    });
  } catch (error) {
    next(error);
  }
});
// books routes
app.use("/book", booksRouter);

//student routes
app.use("/student", studentRoutes);

// issue routes
app.use("/issue", issueRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
