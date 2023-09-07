import asyncHandler from "express-async-handler";

import BCategory from "../models/blogCategoryModel.js";
import validateMongodbId from "../utils/validateMongodbId.js";

// @desc Create new blog category
// route POST /api/blogcategory
export const createBlogCategory = asyncHandler(async (req, res) => {
  try {
    const newBlogCategory = await BCategory.create(req.body);
    res.json(newBlogCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Update blog category
// route PUT /api/blogcategory/:id
export const updateBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updatedBlogCategory = await BCategory.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedBlogCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Delete blog category
// route DELETE /api/blogcategory/:id
export const deleteBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deletedBlogCategory = await BCategory.findByIdAndDelete(id);
    res.json(deletedBlogCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get blog category
// route GET /api/blogcategory/:id
export const getBlogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const blogCategory = await BCategory.findById(id);
    res.json(blogCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get all blog categories
// route GET /api/blogcategory/
export const getAllBlogCategories = asyncHandler(async (req, res) => {
  try {
    const blogCategories = await BCategory.find();
    res.json(blogCategories);
  } catch (error) {
    throw new Error(error);
  }
});
