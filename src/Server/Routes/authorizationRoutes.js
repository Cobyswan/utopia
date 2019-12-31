const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut, requireSignin } = require("../Controllers/authorizationController");
const { userValidationRules, validate } = require("../../Validator/index");

router.post("/signup", userValidationRules(), validate, signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);
router.get('/hello', requireSignin, (req, res) => {
    res.send('authorized')
})


module.exports = router;
