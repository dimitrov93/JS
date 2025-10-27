import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.mongodb_url);
    console.log("Mongo connection successful!");
  } catch (error) {
    throw new Error("Error in connecting to mongodb.");
  }
};
