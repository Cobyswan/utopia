const Product = require("../../DB/models/product");
const { errorHandler } = require("../../Helpers/dbErrorHandler");

exports.createProduct = (req, res) => {
  const { name, image, description, price, stock, category } = req.body;
  if (!name || !image || !description || !price || !stock || !category) {
    res.status(400).json({ error: "All fields are required" });
  }
  const product = new Product(req.body);
  product.save((err, data) => {
    if (err || !data) {
      res.status(400).json({ error: errorHandler(err) });
    }
    res.json({ data, message: "Product created successfuly" });
  });
};
