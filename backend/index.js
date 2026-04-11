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
import { getDbStatus } from "./database/db.js";

//using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "https://gem-beige-eight.vercel.app",
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use((req, res, next) => {
  const { connected, lastError } = getDbStatus();

  if (connected) {
    return next();
  }

  return res.status(503).json({
    message: `Database unavailable. ${lastError}`,
  });
});

//routes
app.use("/api/user", userrouter);
app.use("/api/chat", isAuth, chatroutes);

const port = process.env.PORT || 3000;

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });

  try {
    await dbconnect();
  } catch (error) {
    console.error("Server failed to connect to the database:", error.message);
  }
};

startServer();
