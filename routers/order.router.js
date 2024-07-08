const express = require('express');
const router = express.Router();

const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require('../controllers/order.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['user']),
    asyncMiddleware(createOrder),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getOrders));

router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(updateOrder))
  .delete(deleteOrder);

module.exports = router;
