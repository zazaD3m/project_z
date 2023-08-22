import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/dbConnect.js";
// Routes imports
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

import { errorHandler, notFound } from "./middleware/errorHandler.js";

import morgan from "morgan";
const app = express();

// Load environment variables in process.env
dotenv.config();

// Connect to Data Base
connectDB();

// It parses incoming requests with JSON payloads, A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body),
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Parse `Cookie` header and populate `req.cookies` with an object keyed by the
app.use(cookieParser());

// Log incomming http requests in console
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/user", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/blog", blogRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
