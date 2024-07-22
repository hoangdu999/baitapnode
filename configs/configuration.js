require('dotenv').config();

module.exports = {
  GMAIL: {
    USER: process.env.GMAIL_USER,
    PASS: process.env.GMAIL_PASS,
  },
  CLOUDINARY: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
  },
};
