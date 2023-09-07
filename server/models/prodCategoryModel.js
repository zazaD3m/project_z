import mongoose, { Schema, model } from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const productCategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const PCategory = model(
  "PCategory",
  productCategorySchema,
  "productCategories"
);

export default PCategory;
