import express from "express";
import {
  addConversation,
  createChat,
  destroyChat,
  getAllChats,
  getConversation,
} from "../controllers/chatControllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const route = express.Router();

route.post("/new", isAuth, createChat);
route.get("/all", isAuth, getAllChats);
route.post("/:id", isAuth, addConversation);
route.get("/:id", isAuth, getConversation);
route.delete("/:id", isAuth, destroyChat);

export default route;
