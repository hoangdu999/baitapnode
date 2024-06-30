const express = require('express');
const router = express.Router();

const {
  createfood,
  getfoods,
  updatefood,
  deletefood,
} = require('../controllers/food.controller');
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(createfood),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getfoods));
router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(updatefood))
  .delete(deletefood);

module.exports = router;
