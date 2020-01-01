const express = require("express");
const router = express.Router();
const { createCategory } = require("../Controllers/categoryController");


router.post("/category/create", createCategory);
router.get('/category/test', (req, res) => {
    res.status(200).json({message: 'made it through'})
})



module.exports = router;
