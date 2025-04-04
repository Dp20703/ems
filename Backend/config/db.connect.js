require("dotenv").config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URI);

const connectDb = async () => {
  try {
    await client.connect();
    console.log("Database connected successfully");
    const db = client.db('ems');
    return db;
  } catch (error) {
    console.log("Database connection failed", error);
  }
};
module.exports = connectDb;