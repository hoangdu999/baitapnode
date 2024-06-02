const cartModel = require('../models/cart.model');
const cartValid = require('../validations/cart.valid');

module.exports = {
  createcart: async (req, res) => {
    const body = req.body;
    const { error, value } = cartValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }
    const cart = await cartModel.create(value);

    return res.status(201).json(cart);
  },
  getcarts: async (req, res) => {
    const bodyQuery = {};

    const carts = await cartModel.find(bodyQuery);

    return res.status(200).json(carts);
  },
  updatecart: async (req, res) => {
    const cartId = req.params.id;
    const body = req.body;

    const updatedcart = await cartModel.findByIdAndUpdate(cartId, body, {
      new: true,
    });

    return res.status(200).json(updatedcart);
  },
  deletecart: async (req, res) => {
    const cartId = req.params.id;

    const deletedcart = await cartModel.findOneAndDelete({
      _id: cartId,
    });

    return res.status(200).json(deletedcart);
  },
};
