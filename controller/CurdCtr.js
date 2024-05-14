const AsyncHandler = require("express-async-handler");
const Curd = require("../models/Curd");

//  @ Get All Student Members

const GetAllMember = AsyncHandler(async (req, res) => {
  try {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;

    const totalcount = await Curd.estimatedDocumentCount();
    const alldata = await Curd.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    if (alldata) {
      return res.status(200).json({ msg: alldata, total: totalcount });
    } else {
      return res.status(400).json("Empty");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

//  @ Add Student Members

const AddMember = AsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const resp = await Curd(req.body);
    if (resp) {
      await resp.save();

      return res.status(200).json("successfully added member");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// @ Delete Student Memebers

const RemoveMember = AsyncHandler(async (req, res) => {
  try {
    const resp = await Curd.findByIdAndDelete({ _id: req.params.id });
    if (resp) {
      return res.status(200).json("successfully deleted member");
    }
  } catch (error) {}
});

//  @ Update Student Memebers

const EditMember = AsyncHandler(async (req, res) => {
  try {
    const resp = await Curd.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (resp) {
      return res.status(200).json("sucessfully updated member");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// View Particular Memebers

const ViewSingleMembers = AsyncHandler(async (req, res) => {
  try {
    const resp = await Curd.findById({ _id: req.params.id });
    if (resp) {
      return res.status(200).json(resp);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = {
  GetAllMember,
  AddMember,
  RemoveMember,
  EditMember,
  ViewSingleMembers,
};
