import mongoose, { Schema, model } from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const brandSchema = new Schema(
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

const Brand = model("Brand", brandSchema, "brands");

export default Brand;
