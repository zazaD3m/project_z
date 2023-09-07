import express from "express";
import fs from "fs";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  rating,
  updateProduct,
  uploadImages,
} from "../controllers/productControllers.js";
import { isAdmin, authMiddleware } from "../middleware/authMiddleware.js";
import { productImageResize, uploadImage } from "../middleware/uploadImages.js";

const router = express.Router();

router
  .route("/")
  // @desc Post create a product
  // route POST /api/product/
  .post(authMiddleware, isAdmin, createProduct)
  // @desc Get all products
  // route GET /api/product/
  .get(getAllProducts);

// @desc Put upload product images
// route PUT /api/product/upload-images/:id
router.put(
  "/upload-images/:id",
  authMiddleware,
  isAdmin,
  uploadImage.array("images", 10),
  productImageResize,
  uploadImages
);

// @desc Put Add rating to product
// route PUT /api/product/rating
router.put("/rating", authMiddleware, rating);

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
