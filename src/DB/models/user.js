const mongoose = require("mongoose");
const uuidv4 = require("uuid/v4");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: require("find-config")(".env") });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: 32
    },
    hashed_password: {
      type: String,
      trim: true,
      require: true,
      unique: 32
    },
    salt: String,
    role: {
      type: Number,
      default: 0
    },
    history: {
      type: Array,
      default: []
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

userSchema
  .virtual("password")

  .set(function(password) {
    this._password = password;
    this.salt = uuidv4();
    this.hashed_password = this.encryptPassword(password);
  })

  .get(function() {
    return this._password;
  });

userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function(password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "Error hashing password";
    }
  },

  generateAuthToken: async function() {
    // Generate an auth token for the user
    const user = this;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
  }
};

module.exports = mongoose.model("User", userSchema);
