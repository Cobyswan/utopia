const express = require("express");
const router = express.Router();
const { requireSignin } = require("../Controllers/authorizationController");
const {createProduct, getProducts} = require('../Controllers/productController');

router.post("/product/create/", createProduct)
router.get("/products", getProducts)


module.exports = router;
