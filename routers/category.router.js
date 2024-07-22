const express = require('express');
const multer = require('multer');
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

// const cloudinary = require("../configs/cloudinary");
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'some-folder-name',
//     format: async (req, file) => 'png', // supports promises as well
//     public_id: (req, file) => 'computed-filename-using-request',
//   },
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    roleMiddleware(['admin']),
    upload.single("img"),
    // upload.array('img', 5),
    // upload.fields([
    //   {
    //     name: 'avt',
    //     maxCount: 1,
    //   },
    //   {
    //     name: 'img',
    //     maxCount: 5,
    //   },
    // ]),
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
