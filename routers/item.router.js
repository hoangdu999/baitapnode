const express = require('express');
const router = express.Router();

const {
  createitem,
  getitems,
  updateitem,
  deleteitem,
} = require('../controllers/item.controller');
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(createitem),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getitems));

router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(updateitem))
  .delete(deleteitem);

module.exports = router;
