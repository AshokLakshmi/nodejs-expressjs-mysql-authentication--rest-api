const router = require("express").Router();
const { home } = require("../controller/blogController");

router.get("/", home);

module.exports = router;
