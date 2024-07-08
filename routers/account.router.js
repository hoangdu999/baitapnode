const express = require('express');
const router = express.Router();

const {
  createAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
} = require('../controllers/account.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

router
  .route('/')
  .post(createAccount)
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getAccounts));

router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(updateAccount))
  .delete(deleteAccount);

module.exports = router;
