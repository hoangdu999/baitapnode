const express = require('express');
const router = express.Router();

const {
  createcart,
  getcarts,
  updatecart,
  deletecart,
} = require('../controllers/cart.controller');

router.route('/').post(createcart).get(getcarts);

router.route('/:id').patch(updatecart).delete(deletecart);

module.exports = router;
