import jwt from "jsonwebtoken";

// we get user _id as parameter and generate jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export default generateToken;
