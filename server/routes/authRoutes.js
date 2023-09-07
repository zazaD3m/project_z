import express from "express";

import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import {
  addToWishlist,
  applyCoupon,
  blockUser,
  createOrder,
  createUser,
  deleteUser,
  emptyCart,
  forgotPasswordToken,
  getAllUsers,
  getOrders,
  getUser,
  getUserCart,
  getWishList,
  handleRefreshToken,
  loginAdmin,
  loginUser,
  logoutUser,
  resetPassword,
  saveUserAddress,
  unblockUser,
  updateOrderStatus,
  updatePassword,
  updateUser,
  userCart,
} from "../controllers/userControllers.js";

const router = express.Router();

// @desc Register a new user
// route POST /api/user/register
router.post("/register", createUser);

// @desc Forgot password token
// route POST /api/user/forgot-password-token
router.post("/forgot-password-token", forgotPasswordToken);

// @desc Change password
// route PUT /api/user/reset-password/:token
router.put("/reset-password/:token", resetPassword);

// @desc Update password
// route PUT /api/user/password
router.put("/password", authMiddleware, updatePassword);

// @desc Login user
// route POST /api/user/login
router.post("/login", loginUser);

// @desc Login admin
// route POST /api/user/admin-login
router.post("/admin-login", loginAdmin);

router
  .route("/wishlist")
  // @desc Get get users wishlist
  // route GET /api/user/wishlist
  .get(authMiddleware, getWishList)
  // @desc Put Add or Remove user from wishlist
  // route PUT /api/user/wishlist
  .put(authMiddleware, addToWishlist);

router
  .route("/cart")
  // @desc Get users cart
  // route GET /api/user/cart
  .get(authMiddleware, getUserCart)
  // @desc Post Add products to cart
  // route POST /api/user/cart
  .post(authMiddleware, userCart)
  // @desc Delete Empty users cart
  // route DELETE /api/user/cart
  .delete(authMiddleware, emptyCart);

// @desc Post Apply coupon
// route POST /api/user/cart/applycoupon
router.post("/cart/applycoupon", authMiddleware, applyCoupon);

// @desc Post Create cash order
// route POST /api/user/cart/cash-order
router.post("/cart/cash-order", authMiddleware, createOrder);

// @desc Get User orders
// route GET /api/user/get-orders
router.get("/get-orders", authMiddleware, getOrders);

// @desc Put Update user order
// route PUT /api/user/order/update-order/:id
// id = order id
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);

// @desc Logout user
// route POST /api/user/login
router.get("/logout", logoutUser);

// @desc Get all users
// route GET /api/user/all-users
router.get("/all-users", getAllUsers);

// @desc Refresh jwt token
// route GET /api/user/refresh
router.get("/refresh", handleRefreshToken);

// @desc Update a user
// route PUT /api/user/edit-user
// we get user using authmiddleware that gets user using jwt token
router.put("/edit-user", authMiddleware, updateUser);

// @desc Update users address
// route PUT /api/user/save-address
router.put("/save-address", authMiddleware, saveUserAddress);

// @desc Block a user
// route PUT /api/user/block-user/:id
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);

// @desc Unblock a user
// route PUT /api/user/unblock-user/:id
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

router
  .route("/:id")
  // @desc Get a single user
  // route GET /api/user/:id
  .get(authMiddleware, isAdmin, getUser)
  // @desc Delete a user
  // route DELETE /api/user/:id
  .delete(deleteUser);

export default router;
