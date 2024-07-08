const express = require('express');
const router = express.Router();

const {
  createCart,
  getCarts,
  updateCart,
  deleteCart,
} = require('../controllers/cart.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['user']),
    asyncMiddleware(createCart),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getCarts));
router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(updateCart))
  .delete(deleteCart);

module.exports = router;
