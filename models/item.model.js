const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
  {
    foodId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'food',
    },
    cartId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'cart',
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('item', itemSchema);
