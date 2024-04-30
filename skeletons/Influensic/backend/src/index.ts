import express from "express";
// Config
import packages from "./config/packages";
import database from "./config/database";
import routes from "./config/routes";
// Services
import logger from "./services/logger";

const app = express();

declare global {
  namespace Express {
    interface Request {
      data: any;
    }
  }
}

packages.config(app);

database.config();

routes.config(app);

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 4000;

const HOST: string = process.env.HOST ?? "127.0.0.1";

app.listen(PORT, HOST, () => {
  logger.info(`Server listening on address: http://${HOST}:${PORT}`);
});
