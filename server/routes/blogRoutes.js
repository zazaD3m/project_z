import express from "express";
import {
  createBlog,
  deleteBlog,
  dislikeBlog,
  getAllBlogs,
  getBlog,
  likeBlog,
  updateBlog,
} from "../controllers/blogControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import { blogImageResize, uploadImage } from "../middleware/uploadImages.js";
import { uploadImages } from "../controllers/blogControllers.js";

const router = express.Router();

// @desc Create new blog post
// route POST /api/blog/
router.post("/", authMiddleware, isAdmin, createBlog);

// @desc Put upload blog images
// route PUT /api/blog/upload-images/:id
router.put(
  "/upload-images/:id",
  authMiddleware,
  isAdmin,
  uploadImage.array("images", 10),
  blogImageResize,
  uploadImages
);

// @desc Like blog post
// route PUT /api/blog/likes
router.put("/likes", authMiddleware, likeBlog);

// @desc Dislike blog post
// route PUT /api/blog/likes
router.put("/dislikes", authMiddleware, dislikeBlog);

// @desc Get all blog posts
// route GET /api/blog/
router.get("/", getAllBlogs);

router
  .route("/:id")
  // @desc Get blog post
  // route GET /api/blog/:id
  .get(getBlog)
  // @desc Update blog post
  // route PUT /api/blog/:id
  .put(authMiddleware, isAdmin, updateBlog)
  // @desc Delete blog post
  // route DELETE /api/blog/:id
  .delete(authMiddleware, isAdmin, deleteBlog);

export default router;
