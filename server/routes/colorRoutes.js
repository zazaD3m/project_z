import express from "express";

import {
  createColor,
  deleteColor,
  getAllColors,
  getColor,
  updateColor,
} from "../controllers/colorControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  // @desc Create new color
  // route POST /api/color
  .post(authMiddleware, isAdmin, createColor)
  // @desc Get all colors
  // route GET /api/color
  .get(getAllColors);

router.post("/", authMiddleware, isAdmin, createColor);

router
  .route("/:id")
  // @desc Update color
  // route PUT /api/color/:id
  .put(authMiddleware, isAdmin, updateColor)
  // @desc Delete color
  // route DELETE /api/color/:id
  .delete(authMiddleware, isAdmin, deleteColor)
  // @desc Get color
  // route GET /api/color/:id
  .get(getColor);

export default router;
