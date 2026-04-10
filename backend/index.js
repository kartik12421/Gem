import dotenv from "dotenv";
dotenv.config();

import express from "express";
import dbconnect from "./database/db.js";
import cors from "cors";

const app = express();

//importing routes
import userrouter from "./routes/userRoutes.js";
import chatroutes from "./routes/chatRoutes.js";
import { isAuth } from "./middlewares/isAuth.js";

//using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api/user", userrouter);
app.use("/api/chat", isAuth, chatroutes);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await dbconnect();

    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error.message);
    process.exit(1);
  }
};

startServer();
