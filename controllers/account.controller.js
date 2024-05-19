const accountModel = require('../models/account.model');

module.exports = {
  createaccount: async (req, res) => {
    const body = req.body;

    const account = await accountModel.create(body);

    return res.status(201).json(account);
  },
  getaccounts: async (req, res) => {
    const bodyQuery = {};

    const username = req.query.username;
    const fullName = req.query.fullName;
    const email = req.query.email;
    const address = req.query.address;
    const fromAge = req.query.fromAge;
    const toAge = req.query.toAge;
    const GetTime = new Date().getFullYear();

    if (username) {
      bodyQuery.username = {
        $regex: `.*${username}.*`,
      };
    }
    if (fullName) {
      bodyQuery.fullName = {
        $regex: `.*${fullName}.*`,
      };
    }
    if (email) {
      bodyQuery.email = {
        $regex: `.*${email}.*`,
      };
    }
    if (address) {
      bodyQuery.address = {
        $regex: `.*${address}.*`,
      };
    }
    if (fromAge && toAge) {
      bodyQuery.yob = {
        $gte: GetTime - toAge,
        $lte: GetTime - fromAge,
      };
    }
    const accounts = await accountModel.find(bodyQuery);

    return res.status(200).json(accounts);
  },
  updateaccount: async (req, res) => {
    const accountId = req.params.id;
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
  deleteaccount: async (req, res) => {
    const accountId = req.params.id;

    const deletedaccount = await accountModel.findOneAndDelete({
      _id: accountId,
    });

    return res.status(200).json(deletedaccount);
  },
};
