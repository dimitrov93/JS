import { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import logger from "../services/logger";

const config = (app: Application) => {
  dotenv.config({});

  app.use(cors({}));

  logger.info("Configured packages");
};

export default { config };
