const express = require('express');
const router = express.Router();

const {
  createfood,
  getfoods,
  updatefood,
  deletefood,
} = require('../controllers/food.controller');

router.route('/').post(createfood).get(getfoods);

router.route('/:id').patch(updatefood).delete(deletefood);

module.exports = router;
