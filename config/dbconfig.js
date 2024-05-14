const mongoose = require("mongoose");
require("dotenv").config();

(async function () {
  try {
    return await mongoose
      .connect(process.env.DBURL, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("connection established");
      });
  } catch (error) {
    console.error(error.message);
  }
})();
