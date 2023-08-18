import asyncHandler from "express-async-handler";
import slugify from "slugify";

import Product from "../models/productModel";

// @desc Create new product
// route POST /api/product/
// @access Admin
export const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Update product
// route PUT /api/product/:id
// @access Admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Delete product
// route DELETE /api/product/:id
// @access Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get product
// route GET /api/product/:id
// @access Admin
export const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get all products
// route GET /api/product/
// @access Admin
export const getAllProducts = asyncHandler(async (req, res) => {
  try {
    // Filtering products
    const filteredQueryObj = { ...req.query };

    // We exclude queries from query obj that are not needed for filtering
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete filteredQueryObj[el]);

    const filteredProducts = await Product.find(filteredQueryObj);
    // Gets all products
    // const products = await Product.find();
    // \\ Filters using all querys that where included in req
    // const products = await Product.find(req.query);

    // \\ Filters using only querys that we pass to find
    // const products = await Product.find({
    //   brand: req.query.brand,
    //   category: req.query.category
    // })

    // \\ Filters for certain document key that we chose
    // const filteredProducts = await Product.where("category").equals(req.query.category)
    res.json(filteredProducts);
  } catch (error) {
    throw new Error(error);
  }
});
