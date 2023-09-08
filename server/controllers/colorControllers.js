import asyncHandler from "express-async-handler";

import Color from "../models/colorModel.js";
import validateMongodbId from "../utils/validateMongodbId.js";

// @desc Create new color
// route POST /api/color
export const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Update color
// route PUT /api/color/:id
export const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedColor);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Delete color
// route DELETE /api/color/:id
export const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    res.json(deletedColor);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get color
// route GET /api/color/:id
export const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const color = await Color.findById(id);
    res.json(color);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get all blog categories
// route GET /api/blogcategory/
export const getAllColors = asyncHandler(async (req, res) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (error) {
    throw new Error(error);
  }
});
