import express from "express";

import {
  createCoupon,
  deleteCoupon,
  getAllCoupons,
  updateCoupon,
} from "../controllers/couponControllers.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  // @desc Post Create new coupon
  // route POST /api/coupon/
  .post(authMiddleware, isAdmin, createCoupon)
  // @desc Get all coupons
  // route GET /api/coupon/
  .get(authMiddleware, isAdmin, getAllCoupons);

router
  .route("/:id")
  // @desc Update coupon
  // route PUT /api/coupon/:id
  .put(authMiddleware, isAdmin, updateCoupon)
  // @desc Delete coupon
  // route DELETE /api/coupon/:id
  .delete(authMiddleware, isAdmin, deleteCoupon);

export default router;
