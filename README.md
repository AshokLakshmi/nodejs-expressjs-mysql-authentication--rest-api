NodeJs ExpressJs MySql Authentication Rest API with jsonwebtoken
================================================================

#### Library or Dependencies used in this project

1.  cookie-parser
2.  cors
3.  dotenv
4.  express
5.  express-jwt
6.  express-validator
7.  mysql

### cookie-parser:

cookie-parser is a middleware which parses cookies attached to the client request object.

### cors:

CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

### dotenv:

DotEnv is a lightweight npm package.we used that because it's automatically loads environment variables from a . env file into the process

### express-jwt:

This module provides Express middleware for validating JWTs (JSON Web Tokens) through the jsonwebtoken module. The decoded JWT payload is available on the request object.

### express-validator:

Express Validator is an Express middleware library that you can incorporate in your apps for server-side data validation

### mysql:

This is a node.js driver for mysql.It's used for connecting nodejs server with database and making all querys.

```javascript:
const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("username").not().isEmpty().withMessage("username is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

exports.userSigninValidator = [
  check("username").not().isEmpty().withMessage("username is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Try with at least 6 characters"),
];

```
