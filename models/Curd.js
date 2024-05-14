const mongoose = require("mongoose");

const CurdSchema = mongoose.Schema(
  {
    stud_name: {
      type: String,
      required: ["Please Enter your Name", true],
    },
    stud_email: {
      type: String,
      required: ["Please Enter your Email", true],
    },
    stud_age: {
      type: Number,
      required: ["Please Enter your Age", true],
    },
  },
  {
    timestamps: true,
  }
);

const Curd = mongoose.model("Curd", CurdSchema);
module.exports = Curd;
