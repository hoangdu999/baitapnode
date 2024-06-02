const mongoose = require('mongoose');

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    categoryId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'category',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('food', foodSchema);
