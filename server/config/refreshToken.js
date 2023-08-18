import jwt from "jsonwebtoken";

// we get user _id as parameter and generate jwt token
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

export default generateRefreshToken;
