const express = require('express');
const router = express.Router();

const {
  createaccount,
  getaccounts,
  updateaccount,
  deleteaccount,
} = require('../controllers/account.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

router
  .route('/')
  .post(createaccount)
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getaccounts));

router
  .route('/')
  .patch(
    asyncMiddleware(authMiddleware), 
    asyncMiddleware(updateaccount)
  )
  .delete(deleteaccount);

module.exports = router;
