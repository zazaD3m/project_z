import mongoose from "mongoose";

// checks if type of id is equal to mongodb id type
const validateMongodbId = (id) => {
  let isValid;
  if (Array.isArray(id)) {
    id.forEach((el) => {
      if (mongoose.Types.ObjectId.isValid(el)) {
        isValid = true;
      } else {
        isValid = false;
        throw new Error(`${el} : This id is not valid or not found`);
      }
    });
  } else {
    isValid = mongoose.Types.ObjectId.isValid(id);
  }

  if (!isValid) {
    throw new Error("This id is not valid or not found");
  }
};

export default validateMongodbId;
