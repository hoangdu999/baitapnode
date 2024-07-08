const express = require('express');
const router = express.Router();

const {
  createFood,
  getFoods,
  updateFood,
  deleteFood,
} = require('../controllers/food.controller');
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(createFood),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getFoods));
router
  .route('/')
  .patch(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(updateFood),
  )
  .delete(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(deleteFood),
  );

module.exports = router;
