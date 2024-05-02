const mongoose = require("mongoose");
require("dotenv").config();

// MongoDbURI
const mongoURI = process.env.MONGODB_URI;
const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(mongoURI);
    console.log("Database Connected");
  } catch (error) {
    console.error(`MongoDB connection error ${error}`);
  }
};

module.exports = connectMongoDB;
