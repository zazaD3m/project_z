import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CD_CLOUD_NAME,
  api_key: process.env.CD_API_KEY,
  api_secret: process.env.CD_API_SECRET,
});

export async function cloudinaryUploadImg(file, folder) {
  return cloudinary.uploader
    .upload(file, { resource_type: "auto", folder: folder })
    .then((result) => {
      // Image has been successfully uploaded on
      // cloudinary So we dont need local image
      // file anymore
      // Remove file from local uploads folder
      fs.unlinkSync(file);

      return {
        url: result.secure_url,
        asset_id: result.asset_id,
        public_id: result.public_id,
      };
    })
    .catch((error) => {
      // Remove file from local uploads folder
      fs.unlinkSync(file);
      return { message: "Fail" };
    });
}

export async function cloudinaryDeleteImg(file) {
  return cloudinary.uploader
    .destroy(file, { invalidate: true })
    .then((result) => {
      return {
        message: "Successfully Deleted",
      };
    })
    .catch((error) => {
      return { message: "Fail" };
    });
}
