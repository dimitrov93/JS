import mongoose from "mongoose";

const { Schema } = mongoose;

const portfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    demo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema)