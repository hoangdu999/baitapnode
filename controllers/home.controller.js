const ProductModel = require('../models/product.model');

module.exports = {
  createProduct: async (req, res) => {
    const body = req.body;

    const product = await ProductModel.create(body);

    return res.status(201).json(product);
  },
  getProducts: async (req, res) => {
    const bodyQuery = {};

    const name = req.query.name;
    const fromPrice = req.query.fromPrice;
    const toPrice = req.query.toPrice;

    if (name) {
      bodyQuery.name = {
        $regex: `.*${name}.*`,
      };
    }

    if (fromPrice && toPrice) {
      bodyQuery.price = {
        $gte: fromPrice,
        $lte: toPrice,
      };
    }

    const products = await ProductModel.find(bodyQuery);

    return res.status(200).json(products);
  },
  updateProduct: async (req, res) => {
    const productId = req.params.id;
    const body = req.body;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      body,
      {
        new: true,
      },
    );

    return res.status(200).json(updatedProduct);
  },
  deleteProduct: async (req, res) => {
    const productId = req.params.id;

    const deletedProduct = await ProductModel.findOneAndDelete({
      _id: productId,
    });

    return res.status(200).json(deletedProduct);
  },
};
