const express = require("express");
const router = express.Router();
const { requireSignin } = require("../Controllers/authorizationController");
const {createProduct} = require('../Controllers/productController');

router.post("/product/create/", createProduct)



module.exports = router;
