import express from "express";

import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquirys,
  getEnquiry,
  updateEnquiry,
} from "../controllers/enquiryControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  // @desc Create new enquiry
  // route POST /api/enquiry
  .post(authMiddleware, isAdmin, createEnquiry)
  // @desc Get all enquirys
  // route GET /api/enquiry
  .get(getAllEnquirys);

router.post("/", authMiddleware, isAdmin, createEnquiry);

router
  .route("/:id")
  // @desc Update enquiry
  // route PUT /api/enquiry/:id
  .put(authMiddleware, isAdmin, updateEnquiry)
  // @desc Delete enquiry
  // route DELETE /api/enquiry/:id
  .delete(authMiddleware, isAdmin, deleteEnquiry)
  // @desc Get enquiry
  // route GET /api/enquiry/:id
  .get(getEnquiry);

export default router;
