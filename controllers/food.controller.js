const foodModel = require('../models/food.model');
const { PER_PAGE } = require('../constants/paging');
const foodValid = require('../validations/food.valid');

module.exports = {
  createfood: async (req, res) => {
    const body = req.body;
    const { error, value } = foodValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }
    const food = await foodModel.create(value);

    return res.status(201).json(food);
  },
  getfoods: async (req, res) => {
    const bodyQuery = {};

    const name = req.query.name;
    const fromPrice = req.query.fromPrice;
    const toPrice = req.query.toPrice;
    const foodId = req.query.foodId;
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

    if (foodId) {
      bodyQuery.foodId = foodId;
    }

    const foods = await foodModel
      .find(bodyQuery)
      .sort({
        createdAt: -1,
      })
      .skip(per_page * page - per_page)
      .limit(per_page)
      .exec();

    const count = await foodModel.countDocuments(bodyQuery);

    const bodyResponse = {
      current_page: +page,
      total_page: Math.ceil(count / per_page),
      count,
      per_page,
      data: foods,
    };

    return res.status(200).json(bodyResponse);
  },
  updatefood: async (req, res) => {
    const foodId = req.params.id;
    const body = req.body;

    const updatedfood = await foodModel.findByIdAndUpdate(foodId, body, {
      new: true,
    });

    return res.status(200).json(updatedfood);
  },
  deletefood: async (req, res) => {
    const foodId = req.params.id;

    const deletedfood = await foodModel.findOneAndDelete({
      _id: foodId,
    });

    return res.status(200).json(deletedfood);
  },
};
