const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32
    },
    image: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true,
      maxlength: 2000
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
    size: { 
      type: String,
      require: true, 
    },
    stock: {
      type: Number,
      require: true
    }
    // category: {
    //   type: objectId,
    //   ref: "Category",
    //   required: true
    // }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Product", productSchema);
