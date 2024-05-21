const ProductModel = require('../models/product.model');
const { PER_PAGE } = require('../constants/paging');

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
    const categoryId = req.query.categoryId;
    const page = req.query.page || 1;
    const per_page = req.query.per_page || PER_PAGE;

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

    if (categoryId) {
      bodyQuery.categoryId = categoryId;
    }

    const products = await ProductModel.find(bodyQuery)
      .sort({
        createdAt: -1,
      })
      .skip(per_page * page - per_page)
      .limit(per_page)
      .exec();

    const count = await ProductModel.countDocuments(bodyQuery);

    const bodyResponse = {
      current_page: +page,
      total_page: Math.ceil(count / per_page),
      count,
      per_page,
      data: products,
    };

    return res.status(200).json(bodyResponse);
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
