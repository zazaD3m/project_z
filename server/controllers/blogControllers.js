import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import Blog from "../models/blogModel.js";
import validateMongodbId from "../utils/validateMongodbId.js";
import { cloudinaryUploadImg } from "../utils/cloudinary.js";

// @desc Create new blog post
// route POST /api/blog/
// @access Admin
export const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Update blog post
// route PUT /api/blog/:id
// @access Admin
export const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get blog post
// route GET /api/blog/:id
// @access Public
export const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    // We get blog post and also populate likes and dislikes array with user name and surname
    // instead of just _id s there will be firstName and lastName  in likes and dislikes array
    const getBlog = await Blog.findById(id)
      .populate("likes", ["firstName", "lastName"])
      .populate("disLikes", ["firstName", "lastName"]);
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );

    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Get all blog posts
// route GET /api/blog/
// @access Public
export const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const allBlogs = await Blog.find();

    res.json(allBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Delete blog post
// route DELETE /api/blog/:id
// @access Admin
export const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    res.json(deletedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Like blog post
// route PUT /api/blog/likes
// @access User
export const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  const loggedInUserId = req.user._id;
  validateMongodbId([loggedInUserId, blogId]);
  try {
    // get blog post to be liked
    const blog = await Blog.findById(blogId);
    // check if user disliked blog post
    const alreadyDisliked = blog.disLikes.find(
      (userId) => userId.toString() === loggedInUserId.toString()
    );
    // check if user already liked blog post
    const alreadyLiked = blog.likes.find(
      (userId) => userId.toString() === loggedInUserId.toString()
    );
    let updatedBlog;
    // If post was already liked we just remove like
    if (alreadyLiked) {
      updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loggedInUserId },
        },
        { new: true }
      );
    } // else
    else {
      if (alreadyDisliked) {
        updatedBlog = await Blog.findByIdAndUpdate(
          blogId,
          {
            $pull: { disLikes: loggedInUserId },
            $push: { likes: loggedInUserId },
          },
          { new: true }
        );
      } else {
        updatedBlog = await Blog.findByIdAndUpdate(
          blogId,
          {
            $push: { likes: loggedInUserId },
          },
          { new: true }
        );
      }
    }
    res.json(updatedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc Dislike blog post
// route PUT /api/blog/dislikes
// @access User
export const dislikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  const loggedInUserId = req.user._id;
  validateMongodbId([loggedInUserId, blogId]);
  try {
    // get blog post to be disliked
    const blog = await Blog.findById(blogId);
    // check if user already disliked blog post
    const alreadyDisliked = blog.disLikes.find(
      (userId) => userId.toString() === loggedInUserId.toString()
    );
    // check if user liked blog post
    const alreadyLiked = blog.likes.find(
      (userId) => userId.toString() === loggedInUserId.toString()
    );

    let updatedBlog;
    // If already disliked we know it isn't liked so we only remove dislike
    if (alreadyDisliked) {
      updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { disLikes: loggedInUserId },
        },
        { new: true }
      );
    } // If not already disliked we first check if it was liked before if yes we remove like and add dislike, if it wasn't liked than we just add dislike
    else {
      if (alreadyLiked) {
        updatedBlog = await Blog.findByIdAndUpdate(
          blogId,
          {
            $pull: { likes: loggedInUserId },
            $push: { disLikes: loggedInUserId },
          },
          { new: true }
        );
      } else {
        updatedBlog = await Blog.findByIdAndUpdate(
          blogId,
          {
            $push: { disLikes: loggedInUserId },
          },
          { new: true }
        );
      }
    }
    res.json(updatedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const uploadImages = asyncHandler(async (req, res) => {
  // Get blog id
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const uploader = async (path, folder) =>
      await cloudinaryUploadImg(path, folder);
    const images = [];
    const files = req.images;
    for (const file of files) {
      const newFile = await uploader(file, "blog images");
      images.push(newFile);
    }

    const findBlogAndAddImages = await Blog.findByIdAndUpdate(
      id,
      {
        images: images,
      },
      { new: true }
    );

    res.json(findBlogAndAddImages);
  } catch (error) {
    throw new Error(error);
  }
});
