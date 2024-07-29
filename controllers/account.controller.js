const accountModel = require('../models/account.model');
const accountValid = require('../validations/account.valid');
const ExcelJS = require('exceljs');
const fs = require("fs");

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
  exportExcelFile: async (req, res) => {
    const username = req.query.username;

    const workbook = new ExcelJS.Workbook();
    const sheet1 = workbook.addWorksheet('Danh sách tài khoản');
    const row1 = sheet1.getRow(1);
    row1.getCell(1).value = 'STT';
    row1.getCell(2).value = 'ID';
    row1.getCell(3).value = 'USERNAME';
    row1.getCell(4).value = 'PHONE';

    const bodyQuery = {};

    if (username) {
      bodyQuery.username = username;
    }

    const accounts = await accountModel.find(bodyQuery);

    let i = 2;
    for (let account of accounts) {
      const row = sheet1.getRow(i);
      row.getCell(1).value = i - 1;
      row.getCell(2).value = account._id;
      row.getCell(3).value = account.username;
      row.getCell(4).value = account.phone;
      i++;
    }

    const fileExcelPath = `./assets/file_list_account.xlsx`;

    await workbook.xlsx.writeFile(fileExcelPath);

    //stream file to client
    res.writeHeader(200, {
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': 'attachment; filename="accounts.xlsx"',
    });
    const fileStream = fs.createReadStream(fileExcelPath);
    fileStream.pipe(res);
  },
};
