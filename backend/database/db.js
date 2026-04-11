import mongoose from "mongoose";

let lastDbError =
  "Database connection has not been established yet. Please try again.";

export const getDbStatus = () => ({
  connected: mongoose.connection.readyState === 1,
  lastError: lastDbError,
});

const dbconnect = async () => {
  const dburl = process.env.DB_URL || process.env.MONGODB_URI;

  if (!dburl) {
    throw new Error("DB_URL or MONGODB_URI is required");
  }

  try {
    await mongoose.connect(dburl, {
      dbName: "Gem",
      serverSelectionTimeoutMS: 10000,
    });
    lastDbError = "";
    console.log("connected to db");
  } catch (error) {
    lastDbError = error.message;
    console.error("Failed to connect to db:", error.message);
    throw error;
  }
};

export default dbconnect;
