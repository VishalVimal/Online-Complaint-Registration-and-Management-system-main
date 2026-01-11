const User = require("../../models/Authentication/User-schema");
const mongoose = require("mongoose");
const Token = require("../../jwt/token");
const { findUser } = require("../../demo-data");

const DEMO_MODE = true;

exports.login_post = (req, res) => {
  if (DEMO_MODE) {
    // Demo mode - use hardcoded credentials
    const user = findUser(req.body.username);
    if (user && user.password === req.body.password) {
      const token = Token.tokenGenerator(user.username);
      res.cookie("jwt", token);
      res.redirect(`/user/${user.userId}`);
    } else {
      res.write("<h1>Invalid Username or Password</h1>");
      res.write("<h3>Demo credentials: username: 'demo', password: 'demo123'</h3>");
      res.write("<h3><a href='/sub-pages/user/login.html'>Try Again</a></h3>");
    }
  } else {
    // Database mode
    User.findOne({ username: req.body.username }, (err, docs) => {
      if (!err) {
        if (docs != null) {
          if (docs.password === req.body.password) {
            const token = Token.tokenGenerator(docs.username);
            res.cookie("jwt", token);
            res.redirect(`/user/${docs.userId}`);
          } else {
            res.send("inValid Password");
          }
        } else {
          res.write("<h1>User Not found</h1>");
          res.write("<h3><a href='/sub-pages/user/signup.html'>Sign up</a></h3>");
        }
      } else {
        res.sendStatus(404);
      }
    });
  }
};
