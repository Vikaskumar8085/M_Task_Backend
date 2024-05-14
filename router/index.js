const express = require("express");
const {
  GetAllMember,
  AddMember,
  RemoveMember,
  ViewSingleMembers,
  EditMember,
} = require("../controller/CurdCtr");

const router = express.Router();

router.get("/get-all-members", GetAllMember);
router.post("/add-member", AddMember);
router.delete("/remove-member/:id", RemoveMember);
router.put("/Edit-member/:id", EditMember);
router.get("/single-member/:id", ViewSingleMembers);

module.exports = router;
