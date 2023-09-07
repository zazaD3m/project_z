import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import User from "../models/userModel.js";
import generateToken from "../config/jwtToken.js";
import generateRefreshToken from "../config/refreshToken.js";
import validateMongodbId from "../utils/validateMongodbId.js";
import { sendEmail } from "./emailControllers.js";

// @desc Register a new user
// route POST /api/user/register
// @access Public
export const createUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, password, email } = req.body;

  // Check if user with entered email already exists
  const user = await User.findOne({ email });
  if (!user) {
    // Create a new user
    const newUser = await User.create({
      firstName,
      lastName,
      password,
      email,
    });
    res.json(newUser);
  } else {
    // User already exists
    throw new Error("User already exists");
  }
});

// @desc Login admin
// route POST /api/user/login
// @access Private
export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if admin with entered email exists
  const admin = await User.findOne({ email });

  if (admin.role !== "admin") {
    throw new Error("Not Authorized");
  }

  // Check if entered password matches the password in DB
  if (admin && (await admin.isPasswordMatched(password))) {
    // When admin logs in we refresh his token and store it in db
    const refreshToken = await generateRefreshToken(admin._id);
    const updateAdmin = await User.findByIdAndUpdate(
      admin._id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    // We also store refreshtoken in admins cookies for 3 days
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    // Generate and Assign jwt token to logged in admin
    res.json({
      _id: admin._id,
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// @desc Login user
// route POST /api/user/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if user with entered email exists
  const user = await User.findOne({ email });

  // Check if entered password matches the password in DB
  if (user && (await user.isPasswordMatched(password))) {
    // When user logs in we refresh his token and store it in db
    const refreshToken = await generateRefreshToken(user._id);
    const updateUser = await User.findByIdAndUpdate(
      user._id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    // We also store refreshtoken in users cookies for 3 days
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    // Generate and Assign jwt token to logged in user
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// @desc Handle refresh token
// route GET /api/user/refresh
// @access Public
export const handleRefreshToken = asyncHandler(async (req, res) => {
  // We get refresh token from cookies
  const cookie = req.cookies;
  if (!cookie.refreshToken) {
    throw new Error("No refresh token in cookies");
  }
  const refreshToken = cookie.refreshToken;

  const user = await User.findOne({
    refreshToken: refreshToken,
  });

  if (!user) {
    throw new Error("No refresh token present in db or it did not match");
  }

  // We compare if token stored in db matches with one stored in cookies.. if so we generate new token
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user._id);

    res.json({ accessToken });
  });
});

// @desc Logout user
// route GET /api/user/all-users
// @access Public
export const logoutUser = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  // if there are no cookies no logout required
  if (!cookie.refreshToken) {
    throw new Error("No refresh token in cookies");
  }
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({
    refreshToken: refreshToken,
  });
  // if there is no user that matches refreshToken with one thats stored in client cookies we clear that cookie
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // forbidden
  }
  // if everything went good we find user and nullify its refreshToken in db and clear one thats stored in client cookies
  await User.findOneAndUpdate(
    { refreshToken: refreshToken },
    {
      refreshToken: "",
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  return res.sendStatus(204); // forbidden
});

// @desc
// route
export const saveUserAddress = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongodbId(_id);

  const { firstName, lastName, email } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        address: req.body.address,
      },
      { new: true }
    );
    res.json({
      updatedUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get all users
// route GET /api/user/all-users
// @access Public
export const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get a single user
// route GET /api/user/:id
// @access Public
export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const user = await User.findById(id);
    res.json({
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Delete a user
// route DELETE /api/user/:id
// @access Public
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json({
      deletedUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Update a user
// route PUT /api/user/edit-user
// @access Public
export const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongodbId(_id);
  // \\ Need to add other fields for editing like address
  const { firstName, lastName, email } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        firstName,
        lastName,
        email,
      },
      { new: true }
    );
    res.json({
      updatedUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Block a user
// route PUT /api/user/block-user/:id
// @access Private need admin rights to access this route
export const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User Blocked successfully",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Unblock a user
// route PUT /api/user/unblock-user/:id
// @access Private need admin rights to access this route
export const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User unblocked successfully",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Update password
// route PUT /api/user/password
// @access Public
export const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongodbId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

// @desc Forgot password token
// route POST /api/user/forgot-password-token
// @access Public
export const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found with this email");
  }
  try {
    // We create pass reset token and store it in user db, also put it into link mailed to user
    const token = await user.createPasswordResetToken();
    await user.save();
    // We send mail with token in it to user he than uses it to reset password
    const resetURL = `Hi, Please follow this link to reset your password. This link is valid for 10 minutes. <a href="http://localhost:4000/api/user/reset-password/${token}" >Click Here</a>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      html: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Reset password
// route PUT /api/user/reset-password/:token
// @access Public
export const resetPassword = asyncHandler(async (req, res) => {
  // User enters new password and we compare token in url to token stored in users db if match
  // user will change password
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    throw new Error("Token Expired, please try again later");
  }
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});

// @desc Put Add or Remove product from wishlist
// route PUT /api/user/wishlist
// @access User
export const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;
  validateMongodbId([_id, productId]);
  try {
    let user = await User.findById(_id);
    // Check if user already added product to wishlist
    const alreadyAdded = user.wishlist.find(
      (id) => id.toString() === productId
    );

    if (alreadyAdded) {
      // If already added we remove product from wishlist
      user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: productId },
        },
        { new: true }
      );
    } else {
      // We add product to wishlist
      user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: productId },
        },
        { new: true }
      );
    }
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get get users wishlist
// route GET /api/user/wishlist
// @access User
export const getWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongodbId(_id);

  try {
    const user = await User.findById(_id);
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});
