const express = require("express");
const router = express.Router();
const { requireSignin } = require("../Controllers/authorizationController");
const {createProduct, getProducts, getProduct} = require('../Controllers/productController');

router.post("/product/create/", createProduct)
router.get("/products", getProducts)
router.get("/product/:_id", getProduct)


module.exports = router;
