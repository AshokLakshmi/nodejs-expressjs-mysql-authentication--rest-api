const db = require("../db/dbConfig");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require("express-jwt");
////////////////////////////////////
exports.signup = async (req, res) => {
  const { name, username, email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE username=? OR email=?",
    [username, email],
    async (error, results) => {
      if (error) {
        return res.status(400).json({
          error: error,
          message: error.message,
        });
      }
      if (results.length > 0) {
        return res.status(409).json({
          message: "Username or Email is taken",
        });
      }
      let hashPassword = await bcryptjs.hash(password, 10);
      db.query(
        "INSERT INTO users SET ?",
        {
          name: name,
          username: username,
          email: email,
          password: hashPassword,
        },
        async (error, results) => {
          if (error) {
            return res.status(400).json({
              error: error,
              message: error.message,
            });
          }

          let user_id = results.insertId;

          res.json({
            user_id: user_id,
            message: "sigup successful please signin",
          });
        }
      );
    }
  );
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE username=?",
    [username],
    async (error, results) => {
      if (error) {
        return res.status(400).json({
          message: error.message,
        });
      }
      if (
        !results ||
        !(await bcryptjs.compare(password, results[0].password))
      ) {
        return res.status(400).json({
          message: "Username or password incorrect",
        });
      }
      const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });
      res.cookie("jwt", token, { expiresIn: "2d" });
      const { id, name, username, email } = results[0];
      return res.status(200).json({
        token,
        user: {
          id,
          name,
          username,
          email,
        },
      });
    }
  );
};

exports.signout = (req, res) => {
  res.clearCookie("jwt");
  res.json({
    message: "Signout success",
  });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
