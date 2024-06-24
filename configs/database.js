require("dotenv").config();
const mongoose = require('mongoose');
const accountModel = require("../models/account.model");

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Example');
    console.log('connect DB success');
    const account = await accountModel.findOne({username: "admin"});
    if (!account){
      await accountModel.create({
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
        phone: process.env.ADMIN_PHONE,
        address: process.env.ADMIN_ADDRESS,
        role: process.env.ADMIN_ROLE 
      })

      console.log("admin created");
    }
  } catch (error) {
    console.log('connect DB fail:: ' + error.message);
  }
}

module.exports = connectDB;
