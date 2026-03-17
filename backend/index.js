import dotenv from "dotenv";
dotenv.config();

import express from "express";
import dbconnect from "./database/db.js";

const app = express();

//importing routes
import userrouter from "./routes/userRoutes.js";
import chatroutes from "./routes/chatRoutes.js";
import { isAuth } from "./middlewares/isAuth.js";

//using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/user", userrouter);
app.use("/api/chat", isAuth, chatroutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
  dbconnect();
});
