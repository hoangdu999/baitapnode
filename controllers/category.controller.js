const categoryModel = require('../models/category.model');
const categoryValid = require('../validations/category.valid');
const cloudinary = require('../configs/cloudinary');

module.exports = {
  createCategory: async (req, res) => {
    const body = req.body; 
    const resultUpload = await cloudinary.uploader.upload(req.file.path);
    
    const { error, value } = categoryValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }

    // value.img = `/images/${req.file.filename}`;
    value.img = resultUpload.secure_url;

    const category = await categoryModel.create(value);

    return res.status(201).json(category);
  },
  getCategorys: async (req, res) => {
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
  updateCategory: async (req, res) => {
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
  deleteCategory: async (req, res) => {
    const categoryId = req.params.id;

    const deletedcategory = await categoryModel.findOneAndDelete({
      _id: categoryId,
    });

    return res.status(200).json(deletedcategory);
  },
};
