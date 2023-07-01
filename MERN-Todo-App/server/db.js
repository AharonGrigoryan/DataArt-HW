const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit the process with a failure code
  }
}

module.exports = connectDB;
