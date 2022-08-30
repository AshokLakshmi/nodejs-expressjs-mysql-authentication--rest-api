const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const homeRouter = require("./router/blogRouter");
const authRouter = require("./router/authRouter");
const db = require("./db/dbConfig");

require("dotenv").config();
//     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const app = express();
//     @@@@@@@@@----->MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
//cors
if (process.env.NODE_ENV_MODE === "development") {
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
}
//     @@@@@@@@@------>DATABASE CONNECTION
db.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.message);
    return;
  }
  console.log(db.state);
});
//     @@@@@@@@@@------->ROUTER
app.use("/api", homeRouter);
app.use("/api", authRouter);
//     @@@@@@@@@@------->STARTING SERVER
const port = process.env.SERVER_PORT || 5001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
