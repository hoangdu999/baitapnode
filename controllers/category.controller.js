const categoryModel = require('../models/category.model');
const categoryValid = require('../validations/category.valid');

module.exports = {
  createcategory: async (req, res) => {
    const body = req.body;

    const { error, value } = categoryValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }

    const category = await categoryModel.create(value);

    return res.status(201).json(category);
  },
  getcategorys: async (req, res) => {
    const bodyQuery = {};

    const name = req.query.name;
    if (name) {
      bodyQuery.name = {
        $regex: `.*${name}.*`,
      };
    }

    const categorys = await categoryModel.find(bodyQuery);

    return res.status(200).json(categorys);
  },
  updatecategory: async (req, res) => {
    const categoryId = req.params.id;
    const body = req.body;

    const updatedcategory = await categoryModel.findByIdAndUpdate(
      categoryId,
      body,
      {
        new: true,
      },
    );

    return res.status(200).json(updatedcategory);
  },
  deletecategory: async (req, res) => {
    const categoryId = req.params.id;

    const deletedcategory = await categoryModel.findOneAndDelete({
      _id: categoryId,
    });

    return res.status(200).json(deletedcategory);
  },
};
