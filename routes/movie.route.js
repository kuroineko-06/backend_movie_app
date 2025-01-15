import express from "express";
import {
  getMovieDetails,
  //getMoviesByCategory,
  getTrendingMovie,
  getSingleMovie,
  getSeriesMovie,
  getAnimeMovie,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending/:num", getTrendingMovie);
router.get("/singlemovie/:num", getSingleMovie);
router.get("/seriesmovie/:num", getSeriesMovie);
router.get("/anime/:num", getAnimeMovie);

router.get("/details/:name", getMovieDetails);
// router.get("/:category", getMoviesByCategory);

export default router;
