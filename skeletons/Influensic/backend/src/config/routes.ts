import { Application } from "express";
import logger from "../services/logger";
// Routes
import api from "../api";

const config = (app: Application) => {
  app.use(api.routes);

  app.use(api.v1.routes);

  app.use(api.v1.user.routes);

  app.use(api.v1.user.auth.routes);

  app.use(api.v1.user.settings.routes);

  app.use(api.v1.user.social.routes);

  app.use(api.v1.user.validate.routes);

  logger.info("Configured routes");
};

export default { config };
