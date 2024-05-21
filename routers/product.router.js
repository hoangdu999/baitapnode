const express = require('express');
const router = express.Router();

const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

router.route('/').post(createProduct).get(getProducts);

router.route('/:id').patch(updateProduct).delete(deleteProduct);

module.exports = router;
