import mongoose from "mongoose";

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
    console.log("connected to db");
  } catch (error) {
    console.error("Failed to connect to db:", error.message);
    throw error;
  }
};

export default dbconnect;
