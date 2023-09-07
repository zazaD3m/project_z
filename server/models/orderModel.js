import mongoose, { Schema, model } from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const orderSchema = new Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        count: { type: Number },
        color: { type: String },
      },
    ],
    paymentIntent: {
      type: Object,
    },
    orderStatus: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Cash on Delivery",
        "Processing",
        "Dispatched",
        "Cancelled",
        "Delivered",
      ],
    },
    orderBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema, "orders");

export default Order;
