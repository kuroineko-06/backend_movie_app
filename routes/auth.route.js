import express from "express";
import {
  authCheck,
  edit,
  getUSerById,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/getuser/:id", getUSerById);
router.post("/signup", signup);
router.post("/signin", login);
router.put("/edit/:userId", edit);
router.post("/logout", logout);

router.get("/authCheck", protectRoute, authCheck);

export default router;
