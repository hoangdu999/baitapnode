const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      unique: true,
    },
    totol_money: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    is_payment: {
      type: Boolean,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    cartId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'cart',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('order', orderSchema);
