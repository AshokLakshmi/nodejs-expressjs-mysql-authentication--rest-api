const router = require("express").Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controller/authController");
//validators
const { runValidation } = require("../validators/indexvalidator");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/authValidator");
router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", signout);
router.get("/protected", requireSignin, (req, res) => {
  res.json("welcome to protected route");
});

module.exports = router;
