const express = require("express");
const router = express.Router();
const { requireSignin } = require("../Controllers/authorizationController");
const { getUserById } = "../Controllers/userController";

router.get("/secret/:userId", requireSignin, (req, res) => {
  console.log(req.profile)
  res.json({ user: req.profile });
});



module.exports = router;
