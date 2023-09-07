import express from "express";

import {
  createBlogCategory,
  deleteBlogCategory,
  getAllBlogCategories,
  getBlogCategory,
  updateBlogCategory,
} from "../controllers/blogCategoryControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  // @desc Create new Blog category
  // route POST /api/blogcategory
  .post(authMiddleware, isAdmin, createBlogCategory)
  // @desc Get all Blog categories
  // route GET /api/blogcategory
  .get(getAllBlogCategories);

router.post("/", authMiddleware, isAdmin, createBlogCategory);

router
  .route("/:id")
  // @desc Update Blog category
  // route PUT /api/blogcategory/:id
  .put(authMiddleware, isAdmin, updateBlogCategory)
  // @desc Delete Blog category
  // route DELETE /api/blogcategory/:id
  .delete(authMiddleware, isAdmin, deleteBlogCategory)
  // @desc Get Blog category
  // route GET /api/blogcategory/:id
  .get(getBlogCategory);

export default router;
