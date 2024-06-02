const express = require('express');
const router = express.Router();

const {
  createaccount,
  getaccounts,
  updateaccount,
  deleteaccount,
} = require('../controllers/account.controller');

router.route('/').post(createaccount).get(getaccounts);

router.route('/:id').patch(updateaccount).delete(deleteaccount);

module.exports = router;
