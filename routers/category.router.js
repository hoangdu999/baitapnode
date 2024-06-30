const express = require('express');
const router = express.Router();

const {
  createcategory,
  getcategorys,
  updatecategory,
  deletecategory,
} = require('../controllers/category.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(createcategory),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getcategorys));
router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(updatecategory))
  .delete(deletecategory);

module.exports = router;
