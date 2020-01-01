const User = require("../../DB/models/user");
const { errorHandler } = require("../../Helpers/dbErrorHandler");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
require("dotenv").config({ path: require("find-config")(".env") });

exports.signUp = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({ user });
  });
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "User with email does not exist" });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and Password dont match"
      });
    }

    const token = user.generateAuthToken();

    res.json({ token, user });
  });
};

exports.signOut = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout Successful" });
};

exports.requireSignin = async (req, res, next) => {
  console.log(req.header("Authorization"));
  // const token = req.header('Authorization').replace('Bearer ', '')
  // const data = jwt.verify(token, process.env.JWT_SECRET)
  // try {
  //     const user = await User.findOne({ _id: data._id, 'tokens.token': token })
  //     if (!user) {
  //         throw new Error()
  //     }
  //     req.user = user
  //     req.token = token
  //     next()
  // } catch (error) {
  //     res.status(401).send({ error: 'Not authorized to access this resource' })
  // }
};
