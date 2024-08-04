import express from 'express';

import { protectRoute } from "../moddleware/protectRoute.js";
import { getUserForSidebar } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", protectRoute, getUserForSidebar);

export default router;