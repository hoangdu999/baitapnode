const accountModel = require('../models/account.model');
const accountValid = require('../validations/account.valid');

module.exports = {
  createAccount: async (req, res) => {
    const body = req.body;
    const { error, value } = accountValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }
    const account = await accountModel.create(value);

    return res.status(201).json(account);
  },
  getAccounts: async (req, res) => {
    const bodyQuery = {};

    const username = req.query.username;
    const fullName = req.query.fullName;
    const email = req.query.email;
    const address = req.query.address;
    const fromAge = req.query.fromAge;
    const toAge = req.query.toAge;

    if (username) {
      bodyQuery.username = {
        $regex: `.*${username}.*`,
      };
    }

    if (address) {
      bodyQuery.address = {
        $regex: `.*${address}.*`,
      };
    }

    const accounts = await accountModel.find(bodyQuery);

    return res.status(200).json(accounts);
  },
  updateAccount: async (req, res) => {
    const accountId = req.account.id;
    const body = req.body;

    const updatedaccount = await accountModel.findByIdAndUpdate(
      accountId,
      body,
      {
        new: true,
      },
    );

    return res.status(200).json(updatedaccount);
  },
  deleteAccount: async (req, res) => {
    const accountId = req.account.id;

    const deletedaccount = await accountModel.findOneAndDelete({
      _id: accountId,
    });

    return res.status(200).json(deletedaccount);
  },
};
