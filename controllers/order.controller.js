const orderModel = require('../models/order.model');
const orderValid = require('../validations/order.valid');

module.exports = {
  createorder: async (req, res) => {
    const body = req.body;
    const { error, value } = orderValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }
    const order = await orderModel.create(value);

    return res.status(201).json(order);
  },
  getorders: async (req, res) => {
    const bodyQuery = {};

    const orders = await orderModel.find(bodyQuery);

    return res.status(200).json(orders);
  },
  updateorder: async (req, res) => {
    const orderId = req.params.id;
    const body = req.body;

    const updatedorder = await orderModel.findByIdAndUpdate(orderId, body, {
      new: true,
    });

    return res.status(200).json(updatedorder);
  },
  deleteorder: async (req, res) => {
    const orderId = req.params.id;

    const deletedorder = await orderModel.findOneAndDelete({
      _id: orderId,
    });

    return res.status(200).json(deletedorder);
  },
};
