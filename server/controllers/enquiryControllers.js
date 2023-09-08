import asyncHandler from "express-async-handler";

import Enquiry from "../models/enquiryModel.js";
import validateMongodbId from "../utils/validateMongodbId.js";

// @desc Create new enquiry
// route POST /api/enquiry
export const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Update enquiry
// route PUT /api/enquiry/:id
export const updateEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Delete enquiry
// route DELETE /api/enquiry/:id
export const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
    res.json(deletedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get enquiry
// route GET /api/enquiry/:id
export const getEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const enquiry = await Enquiry.findById(id);
    res.json(enquiry);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get all blog categories
// route GET /api/blogcategory/
export const getAllEnquirys = asyncHandler(async (req, res) => {
  try {
    const enquirys = await Enquiry.find();
    res.json(enquirys);
  } catch (error) {
    throw new Error(error);
  }
});
