const itemModel = require('../models/item.model');
const itemValid = require('../validations/item.valid');

module.exports = {
  createitem: async (req, res) => {
    const body = req.body;
    const { error, value } = itemValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }
    const item = await itemModel.create(value);

    return res.status(201).json(item);
  },
  getitems: async (req, res) => {
    const bodyQuery = {};

    const items = await itemModel.find(bodyQuery);

    return res.status(200).json(items);
  },
  updateitem: async (req, res) => {
    const itemId = req.params.id;
    const body = req.body;

    const updateditem = await itemModel.findByIdAndUpdate(itemId, body, {
      new: true,
    });

    return res.status(200).json(updateditem);
  },
  deleteitem: async (req, res) => {
    const itemId = req.params.id;

    const deleteditem = await itemModel.findOneAndDelete({
      _id: itemId,
    });

    return res.status(200).json(deleteditem);
  },
};
