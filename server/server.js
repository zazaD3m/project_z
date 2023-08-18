import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/dbConnect";
// Routes imports
import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";

import { errorHandler, notFound } from "./middleware/errorHandler";

const logger = require("morgan");

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
app.use(logger("dev"));

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/user", authRoutes);
app.use("/api/product", productRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
