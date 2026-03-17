import express from "express";
import { createChat, getAllChats } from "../controllers/chatControllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const route = express.Router();

route.post("/new", isAuth, createChat);
route.get("/all", isAuth, getAllChats);

export default route;
