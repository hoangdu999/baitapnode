const ProductModel = require("../models/product.model");

module.exports = {
  getHomePage: async (req, res) => {
    res.render("home/index.ejs", { data: await ProductModel.getData() });
  },
};
