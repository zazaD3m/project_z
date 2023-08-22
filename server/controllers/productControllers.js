import asyncHandler from "express-async-handler";
import slugify from "slugify";

import Product from "../models/productModel.js";

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
    /*== FILTERING PRODUCTS ==*/
    // Filtering products by brand, category, etc... EXAMPLE brand=hp&category=smartphone&color=red
    const queryObj = { ...req.query };

    // List of querys that isn't needed in filtering collection, we loop through them and remove them from list of querys that we will pass to mongoose later
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    /* Coverting querys for price filter EXAMPLE api/product?price[gte]=100 
        Convert received query object from { price: { gte: '100' } } to { price: { '$gte': '100' } } db format */
    // gte > greater or equal to the given value
    // lte > less than or equal to the given value
    // gt > greater than the given value
    // lt > less than the given value
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    // Convert filtered version of query to object
    let query = Product.find(JSON.parse(queryString));
    /*== END OF FILTERING ==*/

    /*== SORTING PRODUCTS ==*/
    if (req.query.sort) {
      // Sort query format is ?sort=category,brand we convert it to "category brand" db format
      //    we can add - to querys to sort them descending ?sort=-category, -brand
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      // If there is no sort query provided, sort products by listing date, we pass -createdAt to sort date descending
      query = query.sort("-createdAt");
    }
    /*== END OF SORTING==*/

    /*== LIMITING THE FIELDS ==*/
    // We can select what fields will db return to client for EXAMPLE > ?fields=title,price,category, mongo id returns by default for everything
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      // if no ?fields provided we can exclude fields by default
      query = query.select("-__v");
    }

    /*== END OF LIMITING THE FIELDS ==*/

    /*== PAGINATION ==*/
    // Current page of pages
    const page = req.query.page;
    // Number of products on a single page
    const limit = req.query.limit;
    // Number of products to skip to show rest on page for EXAMPLE we are on first page there are 20 products 5 on each page, skip will be zero so it will show first 5 products, when we go to second page skip will be 5 and it will skip first 5 products already shown on page 1 and display next 5 products and so on...
    const skip = (page - 1) * limit;

    // If there are less total products than requested page * product per page we throw error
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) {
        throw new Error("This Page does not exist");
      }
    }
    query = query.skip(skip).limit(limit);

    /*== END OF PAGINATION ==*/

    const filteredProducts = await query;

    res.json(filteredProducts);
  } catch (error) {
    throw new Error(error);
  }
});
