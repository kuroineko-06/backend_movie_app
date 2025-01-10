import express from "express";
import {
  getSearchHistory,
  removeItemFromSearchHistory,
  searchMovie,
} from "../controllers/search.controller.js";

const router = express.Router();

router.get("/:query", searchMovie);

router.get("/history", getSearchHistory);

router.delete("/history/:id", removeItemFromSearchHistory);

export default router;
