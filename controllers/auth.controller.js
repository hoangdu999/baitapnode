require('dotenv').config();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const accountModel = require('../models/account.model');
const accountValid = require('../validations/account.valid');
const ErrorResponse = require('../helpers/ErrorResponse');

const emailSender = require('../helpers/email.sender');
const getHTMLRegisterConfirm = require('../public/register_confirm');

module.exports = {
  register: async (req, res) => {
    const body = req.body;
    const { error, value } = accountValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }
    const account = await accountModel.create(value);

    //gửi mail
    emailSender({
      email: 'vanphongbk78@gmail.com',
      subject: 'Tieu de email',
      html: getHTMLRegisterConfirm({ full_name: body.username, otp: '090100' }),
    });

    return res.status(201).json(account);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const account = await accountModel.findOne({
      username,
    });

    if (!account) {
      throw new ErrorResponse(401, 'Tài khoản hoặc mật khẩu không chính xác');
    }

    const checkPass = bcryptjs.compareSync(password, account.password);
    if (!checkPass) {
      throw new ErrorResponse(401, 'Tài khoản hoặc mật khẩu không chính xác');
    }

    //mã hóa jwt (json web token)
    // đọc trước jwt
    const payload = {
      _id: account._id,
      username: account.username,
      role: account.role,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return res.status(200).json({
      ...payload,
      jwt: token,
    });
  },
};
