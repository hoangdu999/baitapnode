const { boolean } = require('joi');
const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
  {
    accountId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'account',
    },
    is_order: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('cart', cartSchema);
