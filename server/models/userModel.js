import { Schema, model, mongoose } from "mongoose";
import bcrypt from "bcrypt";

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // mobile: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    password: {
      type: String,
      required: true,
    },
    // role for user or admin
    role: {
      type: String,
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: [{ type: ObjectId, ref: "Address" }],
    wishlist: [{ type: ObjectId, ref: "Product" }],
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Hash the password when creating new user
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Add method to user model for Comparing hashed passwords... when user enters password it will be compared to stored password in DB.. will return true or false
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = model("User", userSchema, "users");

export default User;
