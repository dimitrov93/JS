import mongoose, { mongo } from "mongoose";
// Services
import { validateObjectKeys } from "../services/helper";
import logger from "../services/logger";

const config = async () => {
  if (
    validateObjectKeys(
      process.env,
      ["MONGODB_URL", "MONGODB_PORT", "MONGODB_DATABASE"],
      true
    )
  ) {
    try {
      await mongoose.connect(
        `mongodb://${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`
      );

      logger.info("Connected to the database");
    } catch (err) {
      logger.error("Could not connect to the database");
    }
  } else {
    logger.error("None or not enough .env values passed to database config!");
  }
};

export default { config, connection: mongoose.connection };
