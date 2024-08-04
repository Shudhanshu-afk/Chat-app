import express from "express";
import { sendmessage, getmessage } from "../controllers/message.controllers.js";
import { protectRoute } from "../moddleware/protectRoute.js";

const messagerouter = express.Router();

messagerouter.post("/send/:id",protectRoute, sendmessage);
messagerouter.get("/:id",protectRoute, getmessage);

export default messagerouter;