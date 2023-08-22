import express from "express";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import { isAdmin, authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  // @desc Post create a product
  // route POST /api/product/
  .post(authMiddleware, isAdmin, createProduct)
  // @desc Get all products
  // route GET /api/product/
  .get(getAllProducts);

router
  .route("/:id")
  // @desc Get a product
  // route GET /api/product/:id
  .get(getProduct)
  // @desc Update a product
  // route PUT /api/product/:id
  .put(authMiddleware, isAdmin, updateProduct)
  // @desc Delete a product
  // route DELETE /api/product/:id
  .delete(authMiddleware, isAdmin, deleteProduct);

export default router;
