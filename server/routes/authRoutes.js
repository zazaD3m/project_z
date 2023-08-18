import express from "express";

import { authMiddleware, isAdmin } from "../middleware/authMiddleware";
import {
  blockUser,
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  handleRefreshToken,
  loginUser,
  logoutUser,
  unblockUser,
  updateUser,
} from "../controllers/userControllers";

const router = express.Router();

// @desc Register a new user
// route POST /api/user/register
router.post("/register", createUser);

// @desc Login user
// route POST /api/user/login
router.post("/login", loginUser);

// @desc Logout user
// route POST /api/user/login
router.get("/logout", logoutUser);

// @desc Get all users
// route GET /api/user/all-users
router.get("/all-users", getAllUsers);

// @desc Refresh jwt token
// route GET /api/user/refresh
router.get("/refresh", handleRefreshToken);

router
  .route("/:id")
  // @desc Get a single user
  // route GET /api/user/:id
  .get(authMiddleware, isAdmin, getUser)
  // @desc Delete a user
  // route DELETE /api/user/:id
  .delete(deleteUser);

// @desc Update a user
// route PUT /api/user/edit-user
// we get user using authmiddleware that gets user using jwt token
router.put("/edit-user", authMiddleware, updateUser);

// @desc Block a user
// route PUT /api/user/block-user/:id
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);

// @desc Unblock a user
// route PUT /api/user/unblock-user/:id
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

export default router;
