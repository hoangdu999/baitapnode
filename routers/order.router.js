const express = require('express');
const router = express.Router();

const {
  createorder,
  getorders,
  updateorder,
  deleteorder,
} = require('../controllers/order.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(createorder),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getorders));

router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(updateorder))
  .delete(deleteorder);

module.exports = router;
