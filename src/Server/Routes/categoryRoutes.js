const express = require("express");
const router = express.Router();
const { createCategory } = require("../Controllers/categoryController");


router.post("/category/create", createCategory);



module.exports = router;
