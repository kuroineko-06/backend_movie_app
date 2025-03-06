import express from "express";
import { getCategory } from "../controllers/categories.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/getCategory", protectRoute, getCategory);

export default router;
