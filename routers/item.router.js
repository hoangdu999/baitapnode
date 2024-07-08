const express = require('express');
const router = express.Router();

const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require('../controllers/item.controller');
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    asyncMiddleware(createItem),
  )
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getItems));

router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(updateItem))
  .delete(deleteItem);

module.exports = router;
