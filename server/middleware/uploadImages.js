import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";

import { currDir } from "../utils/currDir.js";

const __dirname = currDir(import.meta.url);

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

export const uploadImage = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const productImageResize = async (req, res, next) => {
  if (!req.files) return next();
  req.images = [];
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/products/${file.filename}`);
      req.images.push(
        path.join(__dirname, "../public/images/products/", file.filename)
      );
      fs.unlinkSync(`public/images/${file.filename}`);
    })
  );

  next();
};

export const blogImageResize = async (req, res, next) => {
  if (!req.files) return next();
  req.images = [];
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/blogs/${file.filename}`);
      req.images.push(
        path.join(__dirname, "../public/images/blogs/", file.filename)
      );
      fs.unlinkSync(`public/images/${file.filename}`);
    })
  );

  next();
};
