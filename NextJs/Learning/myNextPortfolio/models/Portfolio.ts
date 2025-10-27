import mongoose from "mongoose";

interface PortfolioAttrs {
  title: string,
  image: string,
  github: string,
  demo: string,
}

interface PortfolioDoc extends mongoose.Document {
  title: string,
  image: string,
  github: string,
  demo: string,
}

interface PortfolioModel extends mongoose.Model<PortfolioDoc> {
  build(attrs: PortfolioAttrs): PortfolioDoc
}


const portfolioSchema = new mongoose.Schema(
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

// portfolioSchema.statics.build = (attrs: PortfolioAttrs) => {
//   return new Portfolio(attrs)
// }

export default mongoose.models.Portfolio || mongoose.model<PortfolioDoc, PortfolioModel>("Portfolio", portfolioSchema)