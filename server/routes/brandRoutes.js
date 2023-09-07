import express from "express";

import {
  createBrand,
  deleteBrand,
  getAllBrands,
  getBrand,
  updateBrand,
} from "../controllers/brandControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  // @desc Create new brand
  // route POST /api/brand
  .post(authMiddleware, isAdmin, createBrand)
  // @desc Get all brands
  // route GET /api/brand
  .get(getAllBrands);

router.post("/", authMiddleware, isAdmin, createBrand);

router
  .route("/:id")
  // @desc Update brand
  // route PUT /api/brand/:id
  .put(authMiddleware, isAdmin, updateBrand)
  // @desc Delete brand
  // route DELETE /api/brand/:id
  .delete(authMiddleware, isAdmin, deleteBrand)
  // @desc Get brand
  // route GET /api/brand/:id
  .get(getBrand);

export default router;
