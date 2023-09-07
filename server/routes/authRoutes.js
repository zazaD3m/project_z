import express from "express";

import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import {
  addToWishlist,
  blockUser,
  createUser,
  deleteUser,
  forgotPasswordToken,
  getAllUsers,
  getUser,
  getWishList,
  handleRefreshToken,
  loginAdmin,
  loginUser,
  logoutUser,
  resetPassword,
  saveUserAddress,
  unblockUser,
  updatePassword,
  updateUser,
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
