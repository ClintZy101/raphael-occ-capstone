import express from "express";
import { getAllUsers } from "../controllers/users.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/all",protectRoute, adminRoute, getAllUsers)

export default router