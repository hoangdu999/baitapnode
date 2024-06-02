const express = require('express');
const router = express.Router();

const {
  createitem,
  getitems,
  updateitem,
  deleteitem,
} = require('../controllers/item.controller');

router.route('/').post(createitem).get(getitems);

router.route('/:id').patch(updateitem).delete(deleteitem);

module.exports = router;
