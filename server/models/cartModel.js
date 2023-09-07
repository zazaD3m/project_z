import mongoose, { Schema, model } from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        count: { type: Number },
        color: { type: String },
        price: { type: Number },
      },
    ],
    cartTotal: {
      type: Number,
    },
    totalAfterDiscount: {
      type: Number,
    },
    orderBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Cart = model("Cart", cartSchema, "carts");

export default Cart;
