import express from "express";
import { getPopularTv } from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/popular/:num", getPopularTv);

export default router;
