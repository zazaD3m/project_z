import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

import User from "../models/userModel";

// Checks if request headers has jwt token... If so it fetches user data from DB using id stored in jwt token and then attaches that user data to req.user
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        // Decodes jwt token... then we get separated user id from it
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorized, token expired, Please login again");
    }
  } else {
    throw new Error("There is no token attached to the header");
  }
});

// Checks if logged in users role is admin... prevents access if user is not an admin
const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const user = await User.findOne({ email });

  if (user.role !== "admin") {
    throw new Error("Request rejected: admin rights required");
  } else {
    next();
  }
});

export { authMiddleware, isAdmin };
