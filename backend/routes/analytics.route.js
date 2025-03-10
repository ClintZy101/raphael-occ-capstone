import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { sendAnalyticsData } from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, sendAnalyticsData);
// router.get("/all",  getAnalyticsData);

export default router;