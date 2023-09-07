import asyncHandler from "express-async-handler";

import PCategory from "../models/prodCategoryModel.js";
import validateMongodbId from "../utils/validateMongodbId.js";

// @desc Create new product category
// route POST /api/category
export const createProductCategory = asyncHandler(async (req, res) => {
  try {
    const newProductCategory = await PCategory.create(req.body);
    res.json(newProductCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Update product category
// route PUT /api/category/:id
export const updateProductCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updatedProductCategory = await PCategory.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedProductCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Delete product category
// route DELETE /api/category/:id
export const deleteProductCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deletedProductCategory = await PCategory.findByIdAndDelete(id);
    res.json(deletedProductCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get product category
// route GET /api/category/:id
export const getProductCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const productCategory = await PCategory.findById(id);
    res.json(productCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get all product categories
// route GET /api/category/
export const getAllProductCategories = asyncHandler(async (req, res) => {
  try {
    const productCategories = await PCategory.find();
    res.json(productCategories);
  } catch (error) {
    throw new Error(error);
  }
});
