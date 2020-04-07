const Product = require( '../../DB/models/product' )
const { errorHandler } = require("../../Helpers/dbErrorHandler");

exports.createProduct = (req, res) => {
  console.log(req.body)
  const { name, image, description, price, stock } = req.body;
  if (!name || !image || !description || !price || !stock) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const product = new Product(req.body);
  product.save((err, data) => {
    console.log('created product', product)
    if (err || !data) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    res.json({ data, message: "Product created successfuly" });
  });
};

exports.getProducts = (req, res) => {
  Product.find({}, function (err, products) {
    console.log('Controller', products)
    res.status(200).json(products)
  }).catch(err => console.log(err))
}

exports.getProduct = (req, res) => {
  let {_id} = req.params;
  console.log(_id)
  Product.find({_id}, function (err, product) {
    console.log(product)
    res.status(200).json(product)
  }).catch(err => console.log(err))
}
