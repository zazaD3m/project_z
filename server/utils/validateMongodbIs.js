import mongoose from "mongoose";

// checks if type of id is equal to mongodb id type
const validateMongodbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid) {
    throw new Error("This id is not valid or not found");
  }
};

export default validateMongodbId;
