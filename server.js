const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const router = require("./router");
require("dotenv").config();
require("./config/dbconfig");

const PORT = process.env.PORT || 8000;
const app = express();
// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
// middleware

app.use("/api", router);

app.listen(PORT, (err) => {
  if (err) {
    console.error("server not connected");
  } else {
    console.log("server connected");
  }
});
