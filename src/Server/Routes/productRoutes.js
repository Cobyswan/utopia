const express = require("express");
const router = express.Router();
const { requireSignin } = require("../Controllers/authorizationController");
const {createProduct} = require('../Controllers/productController');

router.post("/product/create/:userId", requireSignin, (req, res) => {
  console.log(req.profile)
  res.json({ user: req.profile });
});



module.exports = router;
