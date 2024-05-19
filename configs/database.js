const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Example');
    console.log('connect DB success');
  } catch (error) {
    console.log('connect DB fail:: ' + error.message);
  }
}

module.exports = connectDB;
