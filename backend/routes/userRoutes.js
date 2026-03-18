import express from "express";
import {
  fetchProfile,
  login,
  verifyUser,
} from "../controllers/userControlers.js";
import { isAuth } from "../middlewares/isAuth.js";
import { getConversation } from "../controllers/chatControllers.js";

const route = express.Router();

route.post("/login", login);
route.post("/verify", verifyUser);
route.get("/me", isAuth, fetchProfile);

export default route;
