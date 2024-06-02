const express = require('express');
const router = express.Router();

const {
  createorder,
  getorders,
  updateorder,
  deleteorder,
} = require('../controllers/order.controller');

router.route('/').post(createorder).get(getorders);

router.route('/:id').patch(updateorder).delete(deleteorder);

module.exports = router;
