const express = require('express');
const router = express.Router();

const {
  createcart,
  getcarts,
  updatecart,
  deletecart,
} = require('../controllers/cart.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(createcart),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getcarts));
router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(updatecart))
  .delete(deletecart);

module.exports = router;
