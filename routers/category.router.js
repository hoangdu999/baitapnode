const express = require('express');
const router = express.Router();

const {
  createcategory,
  getcategorys,
  updatecategory,
  deletecategory,
} = require('../controllers/category.controller');

router.route('/').post(createcategory).get(getcategorys);

router.route('/:id').patch(updatecategory).delete(deletecategory);

module.exports = router;
