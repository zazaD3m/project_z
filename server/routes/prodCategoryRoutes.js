import express from "express";

import {
  createProductCategory,
  deleteProductCategory,
  getAllProductCategories,
  getProductCategory,
  updateProductCategory,
} from "../controllers/prodCategoryControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  // @desc Create new product category
  // route POST /api/category
  .post(authMiddleware, isAdmin, createProductCategory)
  // @desc Get all product categories
  // route GET /api/category
  .get(getAllProductCategories);

router.post("/", authMiddleware, isAdmin, createProductCategory);

router
  .route("/:id")
  // @desc Update product category
  // route PUT /api/category/:id
  .put(authMiddleware, isAdmin, updateProductCategory)
  // @desc Delete product category
  // route DELETE /api/category/:id
  .delete(authMiddleware, isAdmin, deleteProductCategory)
  // @desc Get product category
  // route GET /api/category/:id
  .get(getProductCategory);

export default router;
