import mongoose from "mongoose";

const dbconnect = async () => {
  const dburl = process.env.DB_URL;

  try {
    await mongoose.connect(dburl, {
      dbname: "chatbot",
    });
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};

export default dbconnect;
