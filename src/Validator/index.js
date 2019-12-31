const { body, validationResult } = require("express-validator");

const userValidationRules = () => {
  return [
    body("name", "Name is required").notEmpty(),
    body("email", "Must be a valid email")
      .isEmail()
      .isLength({
        min: 4,
        max: 32
      }),
    body("password", "Password is required").notEmpty(),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must have 6 or more characters")
      .matches(/\d/)
      .withMessage("Password must contain a number")
  ];
};

const validate = (req, res, next) => {
  console.log(req);
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    console.log("Validation Successful");
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
  console.log(extractedErrors);
  return res.status(422).json({ error: extractedErrors });
};

module.exports = {
  userValidationRules,
  validate
};
