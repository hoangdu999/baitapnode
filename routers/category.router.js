const express = require('express');
const router = express.Router();

const {
  createCategory,
  getCategorys,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(createCategory),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getCategorys));
router
  .route('/')
  .patch(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(updateCategory),
  )
  .delete(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(deleteCategory),
  );

module.exports = router;
